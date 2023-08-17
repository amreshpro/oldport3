import { BrowserRouter, Route, Routes} from "react-router-dom";
import Hero from "./components/Hero";
import Contact from "./components/Contact.jsx";
// import Skills from "./components/Skills";
import Works from "./components/Works.jsx";
import Navbar from "./components/Navbar";
import Error from "./components/Error.jsx";
import { useSelector } from "react-redux";
import Tech from "./components/Tech";






const App = () => {

  const isDarkMode = useSelector((state)=>state.darkMode)


  return (
    <main className={`w-full h-full ${ isDarkMode ? 'bg-primary':'bg-light' } py-2 px-2`} >
<BrowserRouter>

  <Navbar/>
  <Routes>
<Route path="/" element={<Hero/>}  />
<Route path="/skill" element={<Tech/>}  />
<Route path="/contact" element={<Contact/>}  />
<Route path="/work" element={<Works/>}  />
<Route path="*" element={<Error/>}  />

  </Routes>
</BrowserRouter>
    </main>
  )
}
export default App