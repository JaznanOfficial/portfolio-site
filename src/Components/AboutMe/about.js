import React from 'react';
import profile from './profile.jpg';
import './about.css';
import Typical from "react-typical";

const about = () => {
    return (
        <div className='my-4'>
        <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About me</h2>
            <div class="about-content d-lg-flex">
                <div class="column left">
                    <img src={profile} alt=""/>
                </div>
                <div class="column right">
                    <div className="text text-center">I'm <span className='highlighted-text'> Md Abdur Rahman. </span> <br /> a  <h1 className='text-danger text-center d-flex justify-content-center align-items-center'>
                    <Typical
                        loop={Infinity}
                        steps={[
                            "Passionate Developer",
                            1000,
                            "Full Stack Developer",
                            1000,
                            "Mern Stack Developer",
                            1000,
                            "Front-end Developer",
                            1000,
                            "React Developer",
                            1000,
                        ]}
                        wrapper="p"
                    />
                </h1></div>
                    <p>Hello! My name is <strong className='text-success'>Md Abdur Rahman.</strong> a <strong className='text-success'>junior front-end developer</strong> specializing in building React.js WebApp. I enjoy creating things that live on the internet. My interest in web development started back in 2021, I use Javascript and React.js to create high-end interactive experiences and products. <br /> <br />

                    Certified by Programming Hero: <br /> (http://programming-hero.com/)(https://www.linkedin.com/company/programminghero/). <br />
                    
                                Skilled in Html5,Css3,Bootstrap,Tailwind,Material UI, JavaScript, ES6, React JS, React Router, Firebase. Express, Mongodb, Node js, Heroku <br />
                            
                                I have some experience efficiently coding websites and applications using modern HTML, CSS, JavaScript, and react. Also using other modern technologies
                                easy-to-use, user-friendly websites and applications are a passion of mine and I am assured I might be a wonderful addition to your organization. additionally, to my content, I actively search out new technologies and keep up-to-date on business trends and advancements. I’ve attached a copy of my resume detailing my experience, at the side of links to websites and applications I’ve had the honor of acting on.
                                </p>
                    
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default about;