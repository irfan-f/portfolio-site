import { FC } from 'react';
import Section, { SectionProps } from '../components/Section';
import {
  rootImages,
  outdoorImages,
  gardenImages,
  cookingImages,
  bikingImages,
  placeHolderImages,
} from '../helpers/images';

const sectionsData: SectionProps[] = [
  {
    id: 'roots',
    title: 'Roots',
    content:
      'My parents were born and raised in Bosnia. Hearing the promise of quality education for their kids, chose Oregon to immigrate to. My love for the outdoors, community through soccer and of course craft brews.',
    orientation: 'left',
    style: 'secondary',
    images: rootImages,
    imageFirst: true,
  },
  {
    id: 'outdoors',
    title: 'Outdoors',
    content:
      'Ever since my friends and I dug craters in the empty lot next to our apartments, I’ve loved being outside. Now that means hiking, backpacking, climbing, or camping whenever I can.',
    orientation: 'right',
    style: 'tertiary',
    images: outdoorImages,
  },
  {
    id: 'cooking',
    title: 'Cooking',
    content:
      'Back in high school I dreamed of being a chef, I even wrote restaurant reviews for the school paper. While my path led to software engineering, cooking remains one of the ways I get creative and connect with others.',
    orientation: 'left',
    style: 'secondary',
    images: cookingImages,
  },
  {
    id: 'biking',
    title: 'Biking',
    content:
      'I love exploring by bike. From weaving through city neighborhoods to riding mountain trails, every ride I see something new.',
    orientation: 'right',
    style: 'tertiary',
    images: bikingImages,
  },
  {
    id: 'gardening',
    title: 'Gardening',
    content:
      'I’ve enjoyed bringing new life to my backyard, turning an overgrown patch into a space for growing fresh vegetables. This summer, the highlight was harvesting my own kale.',
    orientation: 'left',
    style: 'secondary',
    images: gardenImages,
  },
];

const placeHolderSectionData: SectionProps = {
  id: 'placeholder',
  title: 'More to come...',
  content:
    "I'm always exploring new eateries, recipes, trails, and websites so I'll be sure to keep y'all updated here...",
  orientation: 'right',
  style: 'tertiary',
  images: placeHolderImages,
  placeholder: true,
};

const Me: FC = () => {
  return (
    <div className="flex flex-row flex-wrap">
      {sectionsData.map((section) => (
        <Section {...section} key={section.id} />
      ))}
      {sectionsData.length % 2 === 1 && <Section {...placeHolderSectionData} />}
    </div>
  );
};

export default Me;
