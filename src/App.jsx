import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About"
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Campus from "./Components/Campus";
import Contact from "./Components/Contact";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
