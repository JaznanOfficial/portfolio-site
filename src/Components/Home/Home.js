import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Profile></Profile>
            <Footer></Footer>
        </div>
    );
};

export default Home;
