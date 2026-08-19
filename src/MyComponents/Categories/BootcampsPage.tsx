import React from "react";
import CategoryPageLayout from "../Categorypagelayout";
import { CATEGORY_ACCENTS } from "../../TsFiles/Categoryaccents";


const BootcampsPage: React.FC = () => (
  <CategoryPageLayout
    category="bootcamps"
    title="Bootcamps"
    subtitle="Intensive, skills-first programs built to get you job-ready fast."
    accent={CATEGORY_ACCENTS.bootcamps}
    pageClassName="cat-bootcamps"
  />
);

export default BootcampsPage;