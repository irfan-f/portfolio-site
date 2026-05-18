import { FC } from 'react';
import { Link } from 'react-router-dom';
import ContentCard, { ContentCardVariant } from '../components/ContentCard';
import { projects } from '../data/projects';
import { rootImages } from '../utils/images';

const VARIANTS: {
  id: ContentCardVariant;
  label: string;
  note: string;
}[] = [
  {
    id: 'shadow',
    label: 'Soft shadow',
    note: '21st “Simple Card” — borderless panel, classic drop shadow.',
  },
  {
    id: 'lifted',
    label: 'Lifted',
    note: '21st blog card — hover float, surface matches page, no dividers.',
  },
  {
    id: 'glass',
    label: 'Glass',
    note: '21st glass panel — frosted fill, subtle inner highlight.',
  },
];

const sampleProject = projects[0]!;
const sampleAbout = {
  title: 'Outdoors',
  content:
    'Hiking, backpacking, climbing, or camping whenever I can — a sample About card for comparison.',
  image: rootImages[0]!,
};

const CardVariantsPreview: FC = () => (
  <div className="mx-auto w-full max-w-7xl px-4 py-8">
    <header className="mb-8 max-w-2xl">
      <p className="font-mulish text-muted mb-2 text-sm font-medium uppercase tracking-wide">
        Dev preview
      </p>
      <h1 className="font-dosis text-teal mb-2 text-3xl font-bold">Card variants</h1>
      <p className="font-mulish text-muted text-sm leading-relaxed">
        Three borderless styles inspired by 21st.dev. Pick one and we can set it as the default{' '}
        <code className="text-on-surface">content-card</code> variant on /me and /projects.
      </p>
      <Link
        to="/projects"
        className="font-mulish text-teal mt-3 inline-block text-sm font-semibold hover:underline"
      >
        ← Back to site
      </Link>
    </header>

    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      {VARIANTS.map(({ id, label, note }) => (
        <section key={id} className="flex min-h-0 flex-col gap-4">
          <div>
            <h2 className="font-dosis text-on-surface text-xl font-bold">{label}</h2>
            <p className="font-mulish text-muted mt-1 text-xs leading-relaxed">{note}</p>
            <p className="font-mulish text-muted mt-1 font-mono text-[11px]">
              variant=&quot;{id}&quot;
            </p>
          </div>

          <ContentCard
            variant={id}
            className="h-full"
            mediaClassName="content-card__media--cover"
            media={
              <img
                src={sampleAbout.image.src}
                alt=""
                className="h-full w-full object-cover"
              />
            }
          >
            <h3 className="content-card__title">{sampleAbout.title}</h3>
            <p className="content-card__text">{sampleAbout.content}</p>
          </ContentCard>

          <ContentCard
            variant={id}
            className="h-full"
            mediaClassName="content-card__media--cover"
            media={
              <img
                src={
                  typeof sampleProject.imageSrc === 'string'
                    ? sampleProject.imageSrc
                    : sampleProject.imageSrc.png
                }
                alt=""
                className="mx-auto h-full w-full max-w-[55%] object-contain p-4 dark:invert dark:brightness-[0.7]"
              />
            }
          >
            <h3 className="content-card__title">{sampleProject.title}</h3>
            <p className="content-card__text">{sampleProject.description}</p>
            <p className="content-card__text content-card__text--emphasis">
              Sample project card
            </p>
          </ContentCard>
        </section>
      ))}
    </div>

    <section className="mt-10">
      <h2 className="font-dosis text-on-surface mb-4 text-xl font-bold">
        Current (bordered)
      </h2>
      <div className="grid max-w-md grid-cols-1">
        <ContentCard
          variant="bordered"
          mediaClassName="content-card__media--cover"
          media={
            <img
              src={sampleAbout.image.src}
              alt=""
              className="h-full w-full object-cover"
            />
          }
        >
          <h3 className="content-card__title">{sampleAbout.title}</h3>
          <p className="content-card__text">{sampleAbout.content}</p>
        </ContentCard>
      </div>
    </section>
  </div>
);

export default CardVariantsPreview;
