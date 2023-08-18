import { BrowserRouter, Route, Routes} from "react-router-dom";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Navbar from "./components/Navbar";
import Error from "./components/Error";







const App = () => {
  return (
    <main className="bg-primary">
<BrowserRouter>

  <Navbar/>
  <Routes>
<Route path="/" element={<Hero/>}  />
<Route path="/skill" element={<Skills/>}  />
<Route path="/contact" element={<Contact/>}  />
<Route path="/work" element={<Works/>}  />
<Route path="*" element={<Error/>}  />

  </Routes>
</BrowserRouter>
    </main>
  )
}
export default App