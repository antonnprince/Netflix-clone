import React from "react";
import Navbar from "./Components/Navbar";
import './App.css';
import { action,originals,comedy,horror,romance,docs } from "./Components/constants";
import Banner from "./Components/Banner";
import Row from "./Components/Row";
 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row uiginalrl={originals} title='Netflix Originals'/>
      <Row url={action} title='Action Movies' isSmall/>
      <Row url={comedy} title='Comedy Movies' isSmall/>
      <Row url={horror} title='Horror Movies' isSmall/>
      <Row url={romance} title='Romance Movies' isSmall/>
      <Row url={docs} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
