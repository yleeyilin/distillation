import "./App.css";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { Home, About, Projects, Experience } from "./pages";
import NavBar from "./components/NavBar";

const pages = [
  { route:"/", component:<Home /> },
  { route:"/about", component:<About /> },
  { route:"/experience", component:<Experience /> },
  { route:"/projects", component:<Projects /> },
]

function PageRoutes() {
  return (
      <Routes location={location} key={location.pathname}>
        {
          pages.map(p => (
            <Route
              path={p.route}
              element={
                p.component
              }
            />
          ))
        }
      </Routes>
  );
}

function App() {
  return (
    <main className="bg-black min-h-screen overflow-y-auto">
      <BrowserRouter>
          <div className="fixed top-0 left-0 w-full z-10">
            <NavBar />
          </div>
          <PageRoutes />
      </BrowserRouter>
    </main>
  );
}

export default App;
