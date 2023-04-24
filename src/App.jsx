import "./App.css";

//Components
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Who from "./components/who/Who";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="App">
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
