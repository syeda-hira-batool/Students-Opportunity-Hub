import React from "react";
import CategoryPageLayout from "../Categorypagelayout";
import { CATEGORY_ACCENTS } from "../../TsFiles/Categoryaccents";


const ExchangeProgramsPage: React.FC = () => (
  <CategoryPageLayout
    category="exchangePrograms"
    title="Exchange Programs"
    subtitle="Study, live, and learn somewhere new without losing academic momentum."
    accent={CATEGORY_ACCENTS.exchangePrograms}
    pageClassName="cat-exchange-programs"
  />
);

export default ExchangeProgramsPage;