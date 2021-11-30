import React from "react";
import Typical from "react-typical";
import './Profile.css'

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="social-div">
                        <div className="social-icon">
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
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            Hello I'm <span className="highlighted-text"> Md Abdur Rahman </span>
                        </span>
                    </div>
                    <div className="profile-details-roles">
                        <h1>
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Passionate Developer❤️ ",
                                    1000,
                                    "Full Stack Developer💻",
                                    1000,
                                    "Mern Stack Developer 👨‍💻 ",
                                    1000,
                                    "Front-end Developer 💪 ",
                                    1000,
                                    "React Developer 🌺 ",
                                    1000,
                                ]}
                                wrapper="p"
                            />
                        </h1>
                        <span className="profile-role-tagline">
                            knack of building applications with front and back end operations.
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">Hire Me</button>
                        <a href="md-abdur-rahman-resume.pdf" download="md-abdur-rahman-resume.pdf">
                            <button className="btn highlighted-btn">Download Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-bg"></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
