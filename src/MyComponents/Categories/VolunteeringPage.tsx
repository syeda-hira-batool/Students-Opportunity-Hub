import React from "react";
import CategoryPageLayout from "../Categorypagelayout";
import { CATEGORY_ACCENTS } from "../../TsFiles/Categoryaccents";
import "../CssFiles/VolunteeringPage.css";

const VolunteeringPage: React.FC = () => (
  <CategoryPageLayout
    category="volunteering"
    title="Volunteering"
    subtitle="Ambassador roles, community programs, and ways to give back while building your network."
    accent={CATEGORY_ACCENTS.volunteering}
    pageClassName="cat-volunteering"
  />
);

export default VolunteeringPage;