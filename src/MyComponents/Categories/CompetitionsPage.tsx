import React from "react";
import CategoryPageLayout from "../Categorypagelayout";
import { CATEGORY_ACCENTS } from "../../TsFiles/Categoryaccents";


const CompetitionsPage: React.FC = () => (
  <CategoryPageLayout
    category="competitions"
    title="Competitions"
    subtitle="Global contests and prizes where your ideas, code, or designs go head-to-head with the best."
    accent={CATEGORY_ACCENTS.competitions}
    pageClassName="cat-competitions"
  />
);

export default CompetitionsPage;