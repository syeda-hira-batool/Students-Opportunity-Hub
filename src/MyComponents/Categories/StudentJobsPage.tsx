import React from "react";
import CategoryPageLayout from "../Categorypagelayout";
import { CATEGORY_ACCENTS } from "../../TsFiles/Categoryaccents";
import "../CssFiles/StudentJobsPage.css";

const StudentJobsPage: React.FC = () => (
  <CategoryPageLayout
    category="studentJobs"
    title="Student Jobs"
    subtitle="Part-time and entry-level roles built around a student schedule."
    accent={CATEGORY_ACCENTS.studentJobs}
    pageClassName="cat-student-jobs"
  />
);

export default StudentJobsPage;