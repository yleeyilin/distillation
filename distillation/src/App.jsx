import "./App.css";
import {
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Home, About, Projects, Experience } from "./pages";
import NavBar from "./components/NavBar";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import { useEffect, useState, useRef, createContext, useContext } from "react";

const routes = ["/", "/about", "/experience", "/projects"];

const ScrollDirectionContext = createContext("forward");

function ScrollHandlerWithContext({ setDirection }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const currentIndex = routes.indexOf(location.pathname);
    let startY = 0;
    let endY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const deltaY = startY - endY;

      if (Math.abs(deltaY) < 50 || isScrolling) return;

      setIsScrolling(true);

      if (deltaY > 0 && currentIndex < routes.length - 1) {
        setDirection("forward");
        navigate(routes[currentIndex + 1]);
      } else if (deltaY < 0 && currentIndex > 0) {
        setDirection("backward");
        navigate(routes[currentIndex - 1]);
      }

      setTimeout(() => setIsScrolling(false), 600);
    };

    const handleTouchMove = (e) => {
      endY = e.touches[0].clientY;
    };

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      if (e.deltaY > 0 && currentIndex < routes.length - 1) {
        setDirection("forward");
        navigate(routes[currentIndex + 1]);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setDirection("backward");
        navigate(routes[currentIndex - 1]);
      }

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 600);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [location.pathname, isScrolling, navigate, setDirection]);

  return null;
}

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
          path="/experience"
          element={
            <PageTransition direction={direction}>
              <Experience />
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

export default App;
