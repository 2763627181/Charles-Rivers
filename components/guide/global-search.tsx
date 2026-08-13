"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useDictionary, useLocale } from "@/lib/context/locale-context";
import { useSearchIndex, type SearchResult } from "@/hooks/use-search-index";

const GROUP_LABEL_KEY = {
  pages: "pages",
  signs: "signs",
  colors: "colors",
  stages: "stages",
} as const;

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const dictionary = useDictionary();
  const router = useRouter();
  const results = useSearchIndex(locale, dictionary);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function onSelect(result: SearchResult) {
    setOpen(false);
    router.push(result.href);
  }

  const groups: Array<{ key: SearchResult["group"]; items: SearchResult[] }> = (
    ["pages", "signs", "colors", "stages"] as const
  )
    .map((key) => ({ key, items: results.filter((r) => r.group === key) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="hidden h-9 w-48 items-center justify-between gap-2 overflow-hidden border-border bg-white px-3 text-sm text-muted-foreground hover:border-medium-blue hover:text-navy md:flex lg:w-64"
      >
        <span className="flex min-w-0 items-center gap-2">
          <Search className="size-4 shrink-0" aria-hidden="true" />
          <span className="truncate">{dictionary.search.placeholder}</span>
        </span>
        <kbd className="pointer-events-none hidden shrink-0 items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground lg:inline-flex">
          Ctrl K
        </kbd>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="md:hidden"
        aria-label={dictionary.search.placeholder}
      >
        <Search className="size-5" />
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title={dictionary.search.placeholder}
        description={dictionary.search.inputPlaceholder}
      >
        <Command shouldFilter>
          <CommandInput placeholder={dictionary.search.inputPlaceholder} />
          <CommandList>
            <CommandEmpty className="py-8 text-center text-sm">
              <p className="font-medium text-foreground">{dictionary.search.noResults}</p>
              <p className="mt-1 text-muted-foreground">{dictionary.search.tryAnother}</p>
            </CommandEmpty>
            {groups.map(({ key, items }) => (
              <CommandGroup key={key} heading={dictionary.search[GROUP_LABEL_KEY[key]]}>
                {items.map((result) => (
                  <CommandItem
                    key={result.id}
                    value={`${result.title} ${result.description ?? ""}`}
                    onSelect={() => onSelect(result)}
                    className="gap-3"
                  >
                    {result.image ? (
                      <span className="relative size-8 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
                        <Image src={result.image} alt="" fill sizes="32px" className="object-cover" />
                      </span>
                    ) : (
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-light-blue text-corporate-blue">
                        <Search className="size-3.5" />
                      </span>
                    )}
                    <span className="flex min-w-0 flex-col">
                      <span className="truncate font-medium">{result.title}</span>
                      {result.description && (
                        <span className="truncate text-xs text-muted-foreground">{result.description}</span>
                      )}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
