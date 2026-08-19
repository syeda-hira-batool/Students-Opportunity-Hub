import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './MyComponents/HomePage'
import ExplorePage from './MyComponents/ExplorePage'

import InternshipsPage from './MyComponents/Categories/InternshipsPage'
import ScholarshipsPage from './MyComponents/Categories/ScholarshipsPage'
import FellowshipsPage from './MyComponents/Categories/FellowshipsPage'
import CompetitionsPage from './MyComponents/Categories/CompetitionsPage'
import HackathonPage from './MyComponents/Categories/HackathonPage'
import ConferencesPage from './MyComponents/Categories/ConferencesPage'
import ExchangeProgramsPage from './MyComponents/Categories/ExchangeProgramsPage'
import SummerSchoolsPage from './MyComponents/Categories/SummerSchoolsPage'
import BootcampsPage from './MyComponents/Categories/BootcampsPage'
import VolunteeringPage from './MyComponents/Categories/VolunteeringPage'
import StudentJobsPage from './MyComponents/Categories/StudentJobsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ExplorePage" element={<ExplorePage />} />
        
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