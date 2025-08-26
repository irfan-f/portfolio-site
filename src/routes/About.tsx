import { FC } from "react";

const imgAlt = 'A photo of Irfan Filipovic smiling in front of some trees and nature';

const Blurb = ({ image, text }: { image: any, text: string }) => {
  return (
    <div className="flex flex-row">
      <div className="flex justify-left w-1/2 sm:w-1/3 h-1/2 mb-4 sm:mb-0">
      <img
        className='introview-image rounded-full md:rounded-xl lg:rounded-lg'
        src={image.src}
        alt={imgAlt}
        srcSet={image.srcSet}
        sizes="(max-width: 300px) 100vw, (max-width: 705px) 50vw, (max-width: 1110px) 40vw, 30vw"
      />
    </div>
    <div className="text-basic flex flex-col my-2 text-center sm:text-left">
      {
        text.split('. ').map(sentence => <p>{sentence}</p>)
      }
    </div>
    </div>
  )
}

const About: FC = () => {
  return (
    <div className="flex flex-col mx-12 items-center justify-evenly" id="about">
    </div>
  )
}

export default About;

/**
 * 
 * Roots
 * My parents were born and raised in Bosnia. Hearing the promise of quality education for their kids, chose Oregon to immigrate to. Many of my interests come from the place I am from. My love for the outdoors, community though soccer and of course craft brews. I am lucky enough to still have a connection to Oregon, visting my family often.  
 * 
 * Outdoors
 * From the time my friends and I dug craters in the empty lot next to our apartments I have sought to get outside. As much as I am fasinated by tech, I strive to balance this out with time in wild places. Wether it is hiking, backpacking, climbing or camping I am passionate about the outdoors and doing what I can for the environment. 
 * 
 * Biking
 * My favorite way to explore the city is on my bike. Though the bikeablity of the city varries, I always see something new.
 * 
 * Cooking
 * For a time in highschool my dream was to become a chef. I even reviewed local resturants for my highschool newspaper. Though I dont even write yelp reviews these days my passion for cooking remains. I love connecting with family and friends through cooking a meal to share. Lately, I have been enjoying exploring fermentation. The process has been a lot of trial and error, mainly trying to ferment new items and learning allongside my roomates that yogurt smells the least. 
 * 
 * Gardening
 * My apartment has a backyard that had not been maintained for years. I have enjoyed restoring the space and have been able to grow kale this summer.
 * 
 */