import React from "react";
import AboutMe from "../AboutMe/about";
import Footer from "../Footer/Footer";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";


const Home = () => {
    return (
        <div>
            
            <Profile></Profile>
            <AboutMe></AboutMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;
