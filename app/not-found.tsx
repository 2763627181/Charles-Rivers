import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#F6F8FB] px-6 text-center font-sans">
        <p className="text-sm font-semibold tracking-wide text-[#005EB8] uppercase">404</p>
        <h1 className="text-2xl font-semibold text-[#172033]">Page not found</h1>
        <p className="max-w-sm text-sm text-[#667085]">
          The page you are looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/en/guide"
          className="mt-2 rounded-lg bg-[#005EB8] px-4 py-2 text-sm font-medium text-white hover:bg-[#147AD6]"
        >
          Back to Guide
        </Link>
      </body>
    </html>
  );
}
