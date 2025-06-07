import React from 'react'
import { GoDot } from "react-icons/go";
import informations from '../assets/json/informations.json'
import imageMap from './imageMap'

const Projects = () => {
  const info = informations[0]

  return (
    <div className="projects-section" id='projects'>
      <div className="project-list flex flex-row gap-32 font-extralight">
        {Array.isArray(info.projects) && info.projects.map((proj, idx) => (
          <div className="project-item flex flex-col w-full gap-5" key={idx}>
            <h1 className='font-extrabold font-home-video lg:text-4xl text-3xl'>{proj.projectName}</h1>
            <div className='flex lg:flex-row flex-col-reverse items-start justify-center gap-10'>
              <div className="projName flex flex-col md:text-[.95em] text-[.75em] lg:w-[70%]">
                {Array.isArray(proj.projectDescription) && proj.projectDescription.map((desc, descIdx) => (
                  <div className="description" key={descIdx}>
                    <ul className='flex flex-col gap-3 px-5'>
                      <p className='indent-5'>{desc.details}</p>
                      {desc.details2 ? <p className='indent-5'>{desc.details2}</p> : null}
                      {Array.isArray(desc.keypoints) && desc.keypoints.map((keypoint, kIdx) => (
                        <li className='text-[.75em] mx-5' key={kIdx}>
                          <GoDot className='inline text-white' />
                          {keypoint.point}
                        </li>
                      ))}

                    </ul>
                  </div>
                ))}
              </div>
              <div className="sampleImg self-center drop-shadow-lg drop-shadow-cyan-600/50">
                <a href={proj.projectLink} target="_blank" rel="noopener noreferrer">
                  <img className='min-w-32 min-h-xs md:w-128 rounded-md' 
                    src={imageMap[proj.sampleImage] || ""}
                    alt={proj.projectName}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects