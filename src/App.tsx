import "./App.css";
import Header from "./components/Header";
import "./index.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="w-auto h-fit text-white bg-green-pattern bg-cover bg-center bg-no-repeat">
      <Header />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
