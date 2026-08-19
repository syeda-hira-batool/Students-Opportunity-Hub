import React from "react";
import CategoryPageLayout from "../Categorypagelayout";
import { CATEGORY_ACCENTS } from "../../TsFiles/Categoryaccents";
import "../CssFiles/InternshipsPage.css";

const InternshipsPage: React.FC = () => (
  <CategoryPageLayout
    category="internships"
    title="Internships"
    subtitle="Hands-on experience with real teams, real projects, and real impact on your resume."
    accent={CATEGORY_ACCENTS.internships}
    pageClassName="cat-internships"
  />
);

export default InternshipsPage;