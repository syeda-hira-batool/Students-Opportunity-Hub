import React from "react";
import CategoryPageLayout from "../Categorypagelayout";
import { CATEGORY_ACCENTS } from "../../TsFiles/Categoryaccents";
import "../CssFiles/SummerSchoolsPage.css";

const SummerSchoolsPage: React.FC = () => (
  <CategoryPageLayout
    category="summerSchools"
    title="Summer Schools"
    subtitle="Short, focused programs to go deep on a subject before the next term starts."
    accent={CATEGORY_ACCENTS.summerSchools}
    pageClassName="cat-summer-schools"
  />
);

export default SummerSchoolsPage;