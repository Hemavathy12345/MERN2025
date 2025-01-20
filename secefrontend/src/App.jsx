import ClassComponentEG from './components/classComponents/ClassComponentEG'
import About from './components/FunctionalComponents/About'
import Contact from './components/FunctionalComponents/Contact';
import Gallery from './components/FunctionalComponents/Gallery';
import Home from './components/FunctionalComponents/Home'

function App() {
return (
  <div>
  <Home/>
  <About/>
  <Gallery image="SECE logo" page="Gallery"/>
  <ClassComponentEG/>
  <Contact/>
  </div>   
);
}

export default App
