import React from "react";
import Common from "./Common";
import web from "../src/Static/Images/blast.gif"



const About = () => {
    return (
        <>
         <Common name="Welcome  to the about section of"
         imgsrc = {web} 
         visit="/Contact" 
         btnname="Contact Us"
         text2 = "For all your projects need we have a perfect match for you.Contact us if you need a wbesite for yourself."
         text3 ="Feel free to Contact us "
         />
        </>
    );

};

export default About;