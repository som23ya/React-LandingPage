import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p>Vistaar is an online platform designed to provide a centralized location for employers to display their job vacancies in our open post listings. The accessible and user-friendly interface of Vistaar also makes it very easy for Job Seekers to look for their required job of interest.
                    <br></br>
                    <br></br>

It is designed  to target especially the local community by focusing on the Blue-Collar Jobs in their area. This platform allows Job Seekers to go through open listings of jobs that are updated regularly and apply to the desired jobs by mentioning skills, education, experience, etc. A Job Seeker can filter posted jobs based on site and type, check the complete description of jobs, and apply on the go.</p>
            </div>
            
        </div>
    )
}

export default About;
