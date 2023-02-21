import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Nav from "./components/Nav.component";

import "./App.css";

function App() {
  return (
    <div className="text-white" id="app_container">
      <Nav>
        <Home />
        <Services />
        <Contact />
      </Nav>
    </div>
  );
}

export default App;
