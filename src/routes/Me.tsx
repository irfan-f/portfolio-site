import { FC } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import Section, { SectionProps } from '../components/Section';
import { useListEntranceVariants } from '../motion/useListEntranceVariants';
import {
  rootImages,
  outdoorImages,
  gardenImages,
  cookingImages,
  bikingImages,
  placeHolderImages,
} from '../utils/images';
import { SITE_URL } from '../data/site';

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
  const { container, item } = useListEntranceVariants();

  return (
    <>
      <Helmet>
        <title>About — Irfan Filipovic</title>
        <link rel="canonical" href={`${SITE_URL}/me`} />
        <meta
          name="description"
          content="Learn about Irfan Filipovic — roots, outdoors, cooking, biking, gardening, and more."
        />
        <meta property="og:title" content="About — Irfan Filipovic" />
        <meta
          property="og:description"
          content="Learn about Irfan Filipovic — roots, outdoors, cooking, biking, gardening, and more."
        />
        <meta property="og:url" content={`${SITE_URL}/me`} />
        <meta property="og:image" content={`${SITE_URL}/images/irfan.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About — Irfan Filipovic" />
        <meta
          name="twitter:description"
          content="Learn about Irfan Filipovic — roots, outdoors, cooking, biking, gardening, and more."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/irfan.webp`} />
      </Helmet>
      <h1 className="sr-only">About</h1>
      <motion.section
        aria-label="About topics"
        className="layout-shift-smooth mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-2 2xl:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {sectionsData.map((section, index) => (
          <motion.div
            key={section.id}
            layout
            variants={item}
            className="layout-shift-smooth min-h-0 h-full"
          >
            <Section
              {...section}
              imageLoading={index === 0 ? 'eager' : 'lazy'}
            />
          </motion.div>
        ))}
        {sectionsData.length % 2 === 1 && (
          <motion.div
            key={placeHolderSectionData.id}
            layout
            variants={item}
            className="layout-shift-smooth min-h-0 h-full"
          >
            <Section {...placeHolderSectionData} />
          </motion.div>
        )}
      </motion.section>
    </>
  );
};

export default Me;
