import React from 'react'
import { FaFacebookSquare, FaInstagram, FaDiscord } from "react-icons/fa";
import informations from '../assets/json/informations.json'
import '../assets/fonts/font.css'

const Contact = () => {
    const info = informations[0]
    const FB = info.contactInfo[0] || {};
    const IG = info.contactInfo[1] || {};


    return (
        <div className="contact-section flex flex-col items-center justify-center text-center w-64 gap-5 pb-20" id='contact'>
            <h1 className='font-home-video'> You may reach out through the following accounts: </h1>
            <div className='socials flex flex-row gap-10'>
                <a href={FB.facebookLink} target="_blank" rel="noopener noreferrer"><FaFacebookSquare className='size-10 hover:fill-cyan-500'/></a>
                <a href={IG.instagramLink} target="_blank" rel="noopener noreferrer"><FaInstagram className='size-10 hover:fill-cyan-500'/></a>
            </div>
        </div>
    )
}

export default Contact