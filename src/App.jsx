
import "./App.css";
import { Routes , Route } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./Routers/HomePage";
import InspireGreatness from "./Routers/InspireGreatness";
import Model from "./Routers/Model";
import Proven from './Routers/PROVENANCE'
import Footer from "./components/Footer";

function App() {
  return (
    <section id="center">
      <Navbar />
      <div  id="Routers">
        <Routes>
      <Route path="/" element ={<HomePage/>}/>
      <Route path="/InspireGreatness" element={<InspireGreatness/>}/>
      <Route path="/Model/:modelName" element={<Model/>} />
      <Route path="/Proven" element={<Proven/>} />
      </Routes>
      </div>
      
      <Footer />
    </section>
  );
}

export default App;
