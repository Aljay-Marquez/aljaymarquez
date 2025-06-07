import React from 'react'
import profileImage from '../assets/images/profile-image.jpg'
import informations from '../assets/json/informations.json'
import '../assets/fonts/font.css'
import '../assets/css/about-me.css'

const about = () => {
    const info =informations[0]
  return (
    <div className="aboutMe flex flex-col md:gap-24 gap-16 w-[80%]">
        <div className="container flex md:flex-row flex-col items-center">
            <div className="profile flex flex-col items-center w-full md:mr-10 z-10" id='about'>
                <div className="profile-image w-48 h-48 rounded-full shadow-lg">
                    <img className="rounded-full p-1 z-10 relative" src={profileImage} alt=" Aljay Marquez" />
                </div>
                <div className="name xl:text-2xl lg:text-xl text-md my-5 tracking-wide">
                    <h1 className=' font-home-video'> Hello! </h1>
                    <span className=' font-home-video'> I am {info.name}, </span>
                </div>
            </div>
            <div className="description flex flex-col w-full md:ml-10 justify-center font-extralight md:text-[.95em] text-[.75em] text-start z-10">
                <span className='xl:text-2xl lg:text-xl text-xl font-home-video'> Objective </span>
                <span className='p-5 indent-5'>{info.description}</span>
            </div>
        </div>
        <div className="work-experiences flex flex-col pt-10">
            {info.experiences.map((exp, idx) => (
            <div className={`experience lg:w-[70%] ${info.experiences.length === 1 ? 'self-center' : 'odd:self-start even:self-end'}`} 
                key={idx}>
                <h1 className='font-extrabold text-3xl'>
                {exp.company === "NEXBRIDGE TECHNOLOGY" ? (
                    <>
                    <span className='text-[#0071BC]'>NEX</span>
                    <span className='text-[#8DC640]'>BRIDGE</span> TECHNOLOGY
                    </>
                ) : (
                    exp.company
                )}
                </h1>
                <h3 className='text-sm'>{exp.position}</h3>
                <p className='text-xs'>{exp.duration}</p>
                <p className='md:text-[.95em] text-[.75em] font-extralight p-5 indent-5'>{exp.roleDescription}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default about