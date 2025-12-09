import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="bg-black min-h-screen">
      <BrowserRouter>
        <div className="fixed top-0 left-0 w-full z-10">
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
