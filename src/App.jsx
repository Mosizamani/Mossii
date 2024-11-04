import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MySkills from './components/MySkills'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import CurrentProjects from './components/CurrentProjects'
import Cooperation from './components/Cooperation'
import EducationExperience from './components/EducationExperience'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/my-skills" element={<MySkills />}></Route>
        <Route path="/current-projects" element={<CurrentProjects />}></Route>
        <Route path="/education-work" element={<EducationExperience />}></Route>
        <Route path="/cooperation" element={<Cooperation />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
