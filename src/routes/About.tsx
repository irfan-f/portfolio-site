import { FC } from "react";
import homePageProfileImage from '../photos/homepage_profile.jpg';
const imgAlt = 'A photo of Irfan Filipovic smiling in front of some trees and nature';



const About: FC = () => {
  return (
    <div className="flex flex-col sm:flex-row mx-12 items-center justify-evenly" id="about">
      <div className="flex justify-left w-1/2 sm:w-1/3 h-1/2 mb-4 sm:mb-0">
        <img
          className='introview-image rounded-full md:rounded-xl lg:rounded-lg'
          src={homePageProfileImage.src}
          alt={imgAlt}
          srcSet={homePageProfileImage.srcSet}
          sizes="(max-width: 300px) 100vw, (max-width: 705px) 50vw, (max-width: 1110px) 40vw, 30vw"
        />
      </div>
      <div className="text-primary flex flex-col my-2 text-center sm:text-left">
        <p>
          A full-stack Software Engineer.
        </p>
        <p>
          A rock climber.
        </p>
        <p>
          A mountain biker.
        </p>
      </div>
    </div>
  )
}

export default About;
