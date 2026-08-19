import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './MyComponents/HomePage'
import ExplorePage from './MyComponents/ExplorePage'
import AboutPage from './MyComponents/AboutPage'
import InternshipsPage from './MyComponents/InternshipsPage'
import ScholarshipsPage from './MyComponents/ScholarshipsPage'
import FellowshipsPage from './MyComponents/FellowshipsPage'
import CompetitionsPage from './MyComponents/CompetitionsPage'
import HackathonPage from './MyComponents/HackathonPage'
import ConferencesPage from './MyComponents/ConferencesPage'
import ExchangeProgramsPage from './MyComponents/ExchangeProgramsPage'
import SummerSchoolsPage from './MyComponents/SummerSchoolsPage'
import BootcampsPage from './MyComponents/BootcampsPage'
import VolunteeringPage from './MyComponents/VolunteeringPage'
import StudentJobsPage from './MyComponents/StudentJobsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ExplorePage" element={<ExplorePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />

        <Route path="/InternshipsPage" element={<InternshipsPage />} />
        <Route path="/ScholarshipsPage" element={<ScholarshipsPage />} />
        <Route path="/FellowshipsPage" element={<FellowshipsPage />} />
        <Route path="/CompetitionsPage" element={<CompetitionsPage />} />
        <Route path="/HackathonPage" element={<HackathonPage />} />
        <Route path="/ConferencesPage" element={<ConferencesPage />} />
        <Route path="/ExchangeProgramsPage" element={<ExchangeProgramsPage />} />
        <Route path="/SummerSchoolsPage" element={<SummerSchoolsPage />} />
        <Route path="/BootcampsPage" element={<BootcampsPage />} />
        <Route path="/VolunteeringPage" element={<VolunteeringPage />} />
        <Route path="/StudentJobsPage" element={<StudentJobsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App