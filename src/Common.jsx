import React from "react";
import Navbar from "../src/Navbar"
import { NavLink } from "react-router-dom";


const Common = (props) => {
    return (
        <>
        <Navbar/>
        <section id="header" className ="d-flex align-items-center">
        <div className = "container-Fluid">
          <div className = 'row'>
              <div className = "col-10 mx-auto">
                  <div className = "row">
                <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-1 d-flex justify-content-center flex-column">
                    
                    <h1>{props.name} <strong className ="brand-name">BrainyWeb</strong>
                    </h1>
                    <h2 className="my-3">
                        {props.text2}
                    </h2>
                     <div className = "mt-3">
                         <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                         <p className="mt-2">{props.text3}</p>
                     </div>
                    </div> 
                    <div className = " col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc} className= "img-fluid animated" alt="home-img" />                    
                    </div>
                    </div>
              </div>
          </div>
      </div>     
      </section>
        </>
    );

};

export default Common;