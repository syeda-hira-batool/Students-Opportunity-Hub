import React from "react";
import CategoryPageLayout from "../Categorypagelayout";
import { CATEGORY_ACCENTS } from "../../TsFiles/Categoryaccents";
import "../CssFiles/ConferencesPage.css";

const ConferencesPage: React.FC = () => (
  <CategoryPageLayout
    category="conferences"
    title="Conferences"
    subtitle="Rooms full of the people already doing what you want to do next."
    accent={CATEGORY_ACCENTS.conferences}
    pageClassName="cat-conferences"
  />
);

export default ConferencesPage;