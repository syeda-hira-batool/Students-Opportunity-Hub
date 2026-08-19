import React from "react";
import CategoryPageLayout from "../Categorypagelayout";
import { CATEGORY_ACCENTS } from "../../TsFiles/Categoryaccents";
import "../CssFiles/FellowshipsPage.css";

const FellowshipsPage: React.FC = () => (
  <CategoryPageLayout
    category="fellowships"
    title="Fellowships"
    subtitle="Mentorship-driven programs for students ready to lead, research, or build something that matters."
    accent={CATEGORY_ACCENTS.fellowships}
    pageClassName="cat-fellowships"
  />
);

export default FellowshipsPage;