import { BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Rightbar from "./components/Rightbar";
import Leftbar from "./components/Leftbar";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";
import About from "./components/About";







const App = () => {
  return (
    <main className="bg-primary w-screen h-fulll">
<BrowserRouter>

  <Navbar/>
  <Rightbar/>
  <Leftbar/>
  <Routes>
<Route path="/" element={<MainContainer/>}  />
<Route path="/skill" element={<Skills/>}  />
<Route path="/about" element={<About/>}  />
<Route path="/contact" element={<Contact/>}  />
<Route path="/work" element={<Works/>}  />
<Route path="*" element={<Error/>}  />

  </Routes>
<Footer/>

</BrowserRouter>
    </main>
  )
}
export default App