import "./App.css";
import Header from "./components/Header";
import "./index.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="w-fit h-fit text-green-dark bg-green-pattern bg-cover bg-center bg-no-repeat">
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
