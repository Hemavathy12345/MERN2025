
import About from './components/FunctionalComponents/About'
import Contact from './components/FunctionalComponents/Contact';
import Gallery from './components/FunctionalComponents/Gallery';
import Home from './components/FunctionalComponents/Home'
import UseState from './components/FunctionalComponents/Hooks/UseState';
import Login from './components/FunctionalComponents/Login';
import Navbar from './components/FunctionalComponents/Navbar'
import Signup from './components/FunctionalComponents/Signup'
import UseReduce from './components/FunctionalComponents/Hooks/UseReduce';
import UseEffect from './components/FunctionalComponents/Hooks/UseEffect'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UseEffectapi from './components/FunctionalComponents/Hooks/UseEffectAPI';
import UseRef from './components/FunctionalComponents/Hooks/UseRef';
import UseMemo from './components/FunctionalComponents/Hooks/UseMemo';
import Memo from './components/FunctionalComponents/Memoization/Memo';
import UseCallBack from './components/FunctionalComponents/Hooks/UseCallBack';
import Student from './components/FunctionalComponents/Hooks/UseContext';
import ReactLifeCycleMethods from './components/classComponents/ReactLifeCycleMethods';
import SampleCustomHook from './components/FunctionalComponents/Hooks/CustomHooks/SampleCustomHook';
import LasyloadingWithsuspense from './components/FunctionalComponents/Memoization/LazyloadingWithsuspense';
import UseLocalStorage from './components/FunctionalComponents/Hooks/UseLocalStorage';
import HOC from './components/FunctionalComponents/HOC/HOC';
function App() {
return (
   <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/home" element={<><Navbar /> <Home/></>}></Route>
        <Route path="/about" element={<><Navbar /><About/></>}></Route>
        <Route path="/gallery" element={<><Navbar /><Gallery image="SECE LOGO" page="Gallery"/></>}></Route>
        <Route path="/contact" element={<><Navbar /><Contact/></>}></Route>
        <Route path="/use-state" element={<><Navbar /><Contact/></>}></Route>
        <Route path="/signup" element={<><Navbar /><Signup/></>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/UseEffect' element={<><Navbar /><UseEffect/></>}></Route>
        <Route path='/UseState' element={<><Navbar /><UseState/></>}></Route>
        <Route path='/UseReduce' element={<><Navbar /><UseReduce/></>}></Route>
        <Route path='/UseEffectAPI' element={<><Navbar /><UseEffectapi/></>}></Route>
        <Route path='/UseRef' element={<><Navbar/><UseRef/></>}></Route>
        <Route path='/UseMemo' element={<><Navbar/><UseMemo/></>}></Route>
        <Route path='/Student' element={<><Navbar/><Student/></>}></Route>
        <Route path='/Memo' element={<><Navbar/><Memo/></>}></Route>
        <Route path='/HOC' element={<><Navbar/><HOC/></>}></Route>
        <Route path='/UseCallBack' element={<><Navbar/><UseCallBack/></>}></Route>
        <Route path='/Lazy' element={<><Navbar/><LasyloadingWithsuspense/></>}></Route>
        <Route path='/React-lcm' element={<><Navbar/><ReactLifeCycleMethods/></>}></Route>
        <Route path='/CustomHooks' element={<><Navbar/><SampleCustomHook/></>}></Route>
        <Route path='/UseLocalStorage' element={<><Navbar/><UseLocalStorage/></>}></Route>
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

