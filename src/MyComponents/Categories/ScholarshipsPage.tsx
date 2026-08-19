import React from "react";
import CategoryPageLayout from "../Categorypagelayout";
import { CATEGORY_ACCENTS } from "../../TsFiles/Categoryaccents";


const ScholarshipsPage: React.FC = () => (
  <CategoryPageLayout
    category="scholarships"
    title="Scholarships"
    subtitle="Fully and partially funded routes to keep tuition from being the thing that stops you."
    accent={CATEGORY_ACCENTS.scholarships}
    pageClassName="cat-scholarships"
  />
);

export default ScholarshipsPage;