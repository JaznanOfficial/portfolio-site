import React from "react";
import AboutMe from "../AboutMe/about";
import Porjects from "../Projects/Porjects";

import Profile from "./Profile/Profile";


const Home = () => {
    return (
        <div>
            
            <Profile></Profile>
            <AboutMe></AboutMe>
            <Porjects></Porjects>

        </div>
    );
};

export default Home;
