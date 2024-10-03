import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import CurrentProjects from './components/currentProjects'
import PastProjects from './components/PastProjects'
import Careers from './components/Careers'



function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/current-projects" element={<CurrentProjects />}></Route>
        <Route path="/past-projects" element={<PastProjects />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
