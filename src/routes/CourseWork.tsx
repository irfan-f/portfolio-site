import { FC, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import Icon from '../components/Icon';
import { icons } from '../icons';
import {
  courseTopics,
  type CourseTopic,
  type CourseIcon,
} from '../data/courses';

const SITE_URL = 'https://irfan-f.com';

const courseMap = new Map<string, CourseTopic>(
  courseTopics.map((c) => [c.id, c] as const),
);

const ICONS_TOP = courseTopics.slice(0, 7);
const ICONS_BOTTOM = courseTopics.slice(7);

function CourseContent({ topic }: { topic: CourseTopic }) {
  return (
    <div className="mx-auto w-full max-w-md space-y-2 px-6 text-left sm:px-12">
      <h2
        id={`course-heading-${topic.id}`}
        className="font-dosis text-accent text-xl font-bold"
      >
        {topic.title}
      </h2>
      <ul className="font-libre text-on-surface list-inside list-disc space-y-1">
        {topic.items.map((item, i) =>
          Array.isArray(item) ? (
            <li key={i}>
              {item[0]}
              <ul className="mt-1 list-inside list-disc space-y-0.5">
                {item.slice(1).map((sub, j) => (
                  <li key={j}>{sub}</li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={i}>{item}</li>
          ),
        )}
      </ul>
    </div>
  );
}

function CourseNavButton({
  title,
  icon,
  isActive,
  onClick,
}: {
  title: string;
  icon: CourseIcon;
  isActive: boolean;
  onClick: () => void;
}) {
  const iconSrc = icons.courses[icon];

  return (
    <button
      type="button"
      aria-current={isActive ? 'true' : undefined}
      aria-label={title}
      title={title}
      onClick={onClick}
      className={`hover:bg-secondary/30 focus-visible:ring-primary flex min-w-0 shrink items-center justify-center rounded-lg p-2 transition-colors focus:outline-none focus-visible:ring-1 sm:p-3 ${
        isActive ? 'bg-secondary/30 text-accent' : 'text-on-surface'
      }`}
    >
      <Icon
        src={iconSrc}
        className="svg-primary svg-stroke-only h-6 w-6 min-w-0 shrink sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
        aria-hidden
      />
    </button>
  );
}

const CourseWork: FC = () => {
  const [activeTab, setActiveTab] = useState(courseTopics[0].id);
  const topic = courseMap.get(activeTab) ?? courseTopics[0];

  const updateTab = useCallback((id: string) => setActiveTab(id), []);

  return (
    <>
      <Helmet>
        <title>{topic.title} — Irfan Filipovic</title>
        <meta
          name="description"
          content={`Course work: ${topic.title}. University of Oregon computer science courses.`}
        />
        <meta
          property="og:title"
          content={`${topic.title} — Irfan Filipovic`}
        />
        <meta
          property="og:description"
          content={`Course work: ${topic.title}`}
        />
        <meta property="og:url" content={`${SITE_URL}/#/courses`} />
        <meta property="og:image" content={`${SITE_URL}/images/irfan.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${topic.title} — Irfan Filipovic`}
        />
        <meta
          name="twitter:description"
          content={`Course work: ${topic.title}`}
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/irfan.png`} />
      </Helmet>
      <main id="courses" className="flex min-h-0 flex-1 flex-col px-4 py-8">
        <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col">
          <div className="depth bg-surface-panel flex h-[75vh] flex-col overflow-hidden rounded-xl">
            <nav
              className="border-border flex min-w-0 flex-row flex-nowrap items-center justify-evenly gap-1 border-b px-2 py-4 sm:gap-2 sm:px-4 md:gap-4 md:px-6"
              aria-label="Course list"
            >
              {ICONS_TOP.map((c, i) => (
                <div
                  key={c.id}
                  className="flex min-w-0 shrink items-center gap-1 sm:gap-2 md:gap-4"
                >
                  {i > 0 && (
                    <span
                      className="h-4 w-px shrink-0 bg-black/40 sm:h-5 md:h-6"
                      aria-hidden
                    />
                  )}
                  <CourseNavButton
                    title={c.title}
                    icon={c.icon!}
                    isActive={activeTab === c.id}
                    onClick={() => updateTab(c.id)}
                  />
                </div>
              ))}
            </nav>

            <section
              className="flex min-h-0 flex-1 flex-col items-center overflow-x-hidden overflow-y-auto p-8"
              aria-labelledby={`course-heading-${topic.id}`}
            >
              <CourseContent topic={topic} />
            </section>

            <nav
              className="border-border flex min-w-0 flex-row flex-nowrap items-center justify-evenly gap-1 border-t px-2 py-4 sm:gap-2 sm:px-4 md:gap-4 md:px-6"
              aria-label="Course list"
            >
              {ICONS_BOTTOM.map((c, i) => (
                <div
                  key={c.id}
                  className="flex min-w-0 shrink items-center gap-1 sm:gap-2 md:gap-4"
                >
                  {i > 0 && (
                    <span
                      className="h-4 w-px shrink-0 bg-black/40 sm:h-5 md:h-6"
                      aria-hidden
                    />
                  )}
                  <CourseNavButton
                    title={c.title}
                    icon={c.icon!}
                    isActive={activeTab === c.id}
                    onClick={() => updateTab(c.id)}
                  />
                </div>
              ))}
            </nav>
          </div>
        </div>
      </main>
    </>
  );
};

export default CourseWork;
