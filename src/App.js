import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home.js";
import Listfe from "./components/Listop";
import Minima from "./components/Minima";
import Play from "./components/Play";
import Rocket from "./components/Rocket";
import Screen from "./components/Screen";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Listfe />
      <Play />
      <Screen />
      <Minima />
      <Rocket />
      <Footer />
    </div>
  );
}

export default App;
