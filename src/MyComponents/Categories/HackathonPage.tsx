import React from "react";
import CategoryPageLayout from "../Categorypagelayout";
import { CATEGORY_ACCENTS } from "../../TsFiles/Categoryaccents";
import "../CssFiles/HackathonPage.css";

const HackathonPage: React.FC = () => (
  <CategoryPageLayout
    category="hackathons"
    title="Hackathons"
    subtitle="Weekend sprints to build something new, meet collaborators, and ship fast."
    accent={CATEGORY_ACCENTS.hackathons}
    pageClassName="cat-hackathons"
  />
);

export default HackathonPage;