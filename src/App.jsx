import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/HomePage";
import Footer from "./Components/Footer/Footer";
import Organic from "./Components/Organic/Organic";
import Notice from "./Components/Notice/Notice";
import Services from "./Components/Services/Services";
import Process from "./Components/Process/Process";
import About from "./Components/About/About";
import Casestudy from "./Components/CaseStudy/Casestudy";
import Testinomial from "./Components/Testinomial/Testinomial";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Organic/>
      <Notice/>
      <Services/>
      <Process/>
      <About/>
      <Casestudy/>
      <Testinomial/>
      <Form/>
      <Footer />
    </div>
  );
}

export default App;
