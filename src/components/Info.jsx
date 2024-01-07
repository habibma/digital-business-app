import React from 'react';

import Profile from '../assets/profile.jpg';
import Linkedin from '../assets/Linkedin.svg';
import Mail from '../assets/Mail.svg';

const Info = () =>{
    return (
        <div>
            <img className='profile' src={Profile} alt='profile picture'/>
            <h1 className="name">Habib Mote</h1>
            <h2 className="profession">Frontend Developer</h2>
            <a className="website" href='https:\\habibmote.com' target='_blank'>habibmote.com</a><br />
            <section className='buttons'>
                <button className="email"><img src={Mail} /> Email</button>
                <button className="linkedin"><img src={Linkedin} /> LinkeIin</button>
            </section>
        </div>
    )
}

export default Info;