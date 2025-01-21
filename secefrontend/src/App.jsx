import ClassComponentEG from './components/classComponents/ClassComponentEG'
import About from './components/FunctionalComponents/About'
import Contact from './components/FunctionalComponents/Contact';
import Gallery from './components/FunctionalComponents/Gallery';
import Home from './components/FunctionalComponents/Home'
import Navbar from './components/FunctionalComponents/Navbar'
import Signup from './components/FunctionalComponents/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/gallery" element={<Gallery image="SECE LOGO" page="Gallery"/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
  {/* <Route path="/ClassComponentEG" element={<ClassComponentEG/>}></Route> */}
  </Routes>
  {/*<Home/><hr/>
      <About/><hr/>
      <h2>Without Props</h2>
      <Gallery/>
      <h2>With Props</h2>
      <Gallery image="SECE LOGO" page="Gallery"/><hr/>
      <Contact/>
      <ClassCompEg /><hr/>*/}
</BrowserRouter>

);
}

export default App

