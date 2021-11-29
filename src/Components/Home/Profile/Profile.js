import React from "react";
import Typical from "react-typical"

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <a href="https://www.facebook.com/mdabdurrahman30/">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="https://github.com/Jaznanofficial">
                            <i className="fa fa-github-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/jaznanofficial/">
                            <i class="fa fa-linkedin-square"></i>
                        </a>
                    </div>
                    <div className="profile-name-details">
                        <span className="primary-text">
                            Hello I'm <span className="highlighted-text"> Md Abdur Rahman </span>
                        </span>
                    </div>
                    <div className="profile-details-rols">
                        <h1>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
