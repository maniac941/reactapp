import React from "react";
import Common from "./Common";
import web from "../src/Static/Images/blast.gif"



const About = () => {
    return (
        <>
         <Common name=" About Us"
         imgsrc = {web} 
         visit="/Contact" 
         btnname="Contact Us"
         text2 = "We are a team of talented developers making interactive websites."
         text3 ="Contact us now! "
         />                              
 </>
    );

};

export default About;