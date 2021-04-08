import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "../src/Home";
import About from "../src/About";
import Service from "../src/Service";
import Contact from "../src/Contact";
import { Redirect, Route } from "react-router-dom";


const App = () => {
    return (
        <>
        <switch>
         <Route exact path="/" component = {Home} />
         <Route exact path="/about" component = {About} />
         <Route exact path="/service" component = {Service} />
         <Route exact path="/contact" component = {Contact} />

         <Redirect to ="/" />
        </switch>
        </>
    );

};

export default App;