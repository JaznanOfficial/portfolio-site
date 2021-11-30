import React from 'react';
import profile from './profile.jpg'
import './about.css'

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
                    <div class="text">I'm Prakash and I'm a <span class="typing-2"></span></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                    
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default about;