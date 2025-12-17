import "./App.css";
import {
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";
import NavBar from "./components/NavBar";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import { useEffect, useState, useRef, createContext, useContext } from "react";

const routes = ["/", "/about", "/projects", "/contact"];

const ScrollDirectionContext = createContext("forward");

function AnimatedRoutes() {
  const location = useLocation();
  const direction = useContext(ScrollDirectionContext);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition direction={direction}>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition direction={direction}>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition direction={direction}>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition direction={direction}>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [direction, setDirection] = useState("forward");

  return (
    <main className="bg-black min-h-screen overflow-hidden">
      <BrowserRouter>
        <ScrollDirectionContext.Provider value={direction}>
          <ScrollHandlerWithContext setDirection={setDirection} />
          <div className="fixed top-0 left-0 w-full z-10">
            <NavBar />
          </div>
          <AnimatedRoutes />
        </ScrollDirectionContext.Provider>
      </BrowserRouter>
    </main>
  );
}

function ScrollHandlerWithContext({ setDirection }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const currentIndex = routes.indexOf(location.pathname);
    let scrollDelta = 0;

    const handleWheel = (e) => {
      e.preventDefault();

      if (isScrolling) return;

      scrollDelta += e.deltaY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        if (Math.abs(scrollDelta) > 50) {
          setIsScrolling(true);

          if (scrollDelta > 0 && currentIndex < routes.length - 1) {
            setDirection("forward");
            navigate(routes[currentIndex + 1]);
          } else if (scrollDelta < 0 && currentIndex > 0) {
            setDirection("backward");
            navigate(routes[currentIndex - 1]);
          }

          setTimeout(() => setIsScrolling(false), 1000);
        }

        scrollDelta = 0;
      }, 50);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [location.pathname, isScrolling, navigate, setDirection]);

  return null;
}

export default App;
