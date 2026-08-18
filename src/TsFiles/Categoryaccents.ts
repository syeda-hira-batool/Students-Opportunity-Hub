import type { OpportunityCategory } from "../TsFiles/Opportunitiesdata.ts";

/*Reuses the exact colors already assigned to each category's icon in HomePage's 
"What We Have" grid, so a category's identity color stays consistent everywhere.
 */
export const CATEGORY_ACCENTS: Record<OpportunityCategory, string> = {
  internships: "#7fd9a8",
  scholarships: "#F9B2D7",
  fellowships: "#CFECF3",
  competitions: "#FFD166",
  hackathons: "#8367C7",
  conferences: "#5FBBEE",
  exchangePrograms: "#C5B3D3",
  summerSchools: "#F0AE1E",
  bootcamps: "#FF7FAE",
  volunteering: "#F5CBCB",
  studentJobs: "#DAF9DE",
};


