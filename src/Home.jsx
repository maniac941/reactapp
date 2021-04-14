import React from "react";
import Common from "./Common";
import web from "../src/Static/Images/blast.gif"



const Home = () => {
    return (
        <>
           <Common name="Welcome to the  "
            imgsrc = {web} 
            visit="/Service" 
            btnname="Get Started"
            text2 = "For all your projects need we have a perfect match for you.  Contact us if you want to show your presence online."
            text3 ="Explore for more. "
            />

        </>
    );

};

export default Home;