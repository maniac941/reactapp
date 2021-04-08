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
            text2 = "We are a team of talented developers making interactive websites."
            text3 ="Feel free to explore. "

            />

        </>
    );

};

export default Home;