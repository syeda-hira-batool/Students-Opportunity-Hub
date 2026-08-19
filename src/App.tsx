import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './MyComponents/HomePage'
import ExplorePage from './MyComponents/ExplorePage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ExplorePage" element={<ExplorePage />} />
        

        
      </Routes>
    </BrowserRouter>
  )
}

export default App