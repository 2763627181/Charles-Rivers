import type { Bilingual, Species } from "@/types/common";

export interface CoatColor {
  id: string;
  name: string;
  species: Species[];
  note?: Bilingual;
  image: string;
  /** CSS object-position for the thumbnail crop (e.g. "60% 50%"), biased toward
   *  the head/body rather than the geometric center of the frame, since these
   *  cutouts are dominated by a long thin tail on one side. Defaults to center. */
  imagePosition?: string;
}
