import {
  FC,
  KeyboardEvent,
  useCallback,
  useId,
  useState,
} from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import Icon from '../components/Icon';
import { icons } from '../icons';
import {
  courseTopics,
  type CourseTopic,
  type CourseIcon,
} from '../data/courses';
import {
  courseContentMotion,
  tabIndicatorTransition,
} from '../motion/entranceVariants';
import { SITE_URL } from '../data/site';

const TAB_INDICATOR_LAYOUT_ID = 'course-active-tab';
const TABLIST_COLS = 7;

const courseMap = new Map<string, CourseTopic>(
  courseTopics.map((c) => [c.id, c] as const),
);

const hasIcon = (c: CourseTopic): c is CourseTopic & { icon: CourseIcon } =>
  c.icon != null;
const topicsWithIcons = courseTopics.filter(hasIcon);

const topicOrder = new Map<string, number>(
  topicsWithIcons.map((t, i) => [t.id, i] as const),
);

type TopicWithIcon = CourseTopic & { icon: CourseIcon };

function tabId(topicId: string) {
  return `course-tab-${topicId}`;
}

function moveTabIndexFromArrow(
  index: number,
  key: string,
  length: number,
): number | null {
  if (key === 'ArrowRight') {
    return index + 1 < length ? index + 1 : null;
  }
  if (key === 'ArrowLeft') {
    return index > 0 ? index - 1 : null;
  }
  if (key === 'ArrowDown') {
    const below = index + TABLIST_COLS;
    return below < length ? below : null;
  }
  if (key === 'ArrowUp') {
    const above = index - TABLIST_COLS;
    return above >= 0 ? above : null;
  }
  if (key === 'Home') return 0;
  if (key === 'End') return length - 1;
  return null;
}

function CourseTab({
  topic,
  isActive,
  onActivate,
  reduceMotion,
  tabPanelId,
}: {
  topic: TopicWithIcon;
  isActive: boolean;
  onActivate: () => void;
  reduceMotion: boolean;
  tabPanelId: string;
}) {
  const iconSrc = icons.courses[topic.icon];
  const tid = tabId(topic.id);

  return (
    <button
      id={tid}
      type="button"
      role="tab"
      aria-selected={isActive ? 'true' : 'false'}
      aria-controls={tabPanelId}
      tabIndex={isActive ? 0 : -1}
      aria-label={topic.title}
      title={topic.title}
      onClick={onActivate}
      className={`focus-visible:ring-primary relative flex min-w-0 shrink cursor-pointer items-center justify-center rounded-lg p-2 transition-colors focus:outline-none focus-visible:ring-1 sm:p-3 ${
        isActive ? 'text-teal' : 'text-on-surface hover:text-teal/80'
      }`}
    >
      {isActive && (
        <motion.span
          layoutId={TAB_INDICATOR_LAYOUT_ID}
          aria-hidden
          className="absolute inset-0 rounded-lg bg-teal/12 ring-1 ring-teal/35"
          transition={tabIndicatorTransition(reduceMotion)}
        />
      )}
      <Icon
        src={iconSrc}
        className={`relative h-6 w-6 min-w-0 shrink sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 ${isActive ? 'svg-teal' : 'svg-primary'}`}
        aria-hidden
      />
    </button>
  );
}

function CourseTabStrip({
  activeTab,
  updateTab,
  reduceMotion,
  tabPanelId,
}: {
  activeTab: string;
  updateTab: (id: string) => void;
  reduceMotion: boolean;
  tabPanelId: string;
}) {
  const onTabListKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement | null;
      if (target?.getAttribute('role') !== 'tab') return;

      const currentId = target.id.replace(/^course-tab-/, '');
      const idx = topicOrder.get(currentId);
      if (idx === undefined) return;

      const { key } = e;
      if (
        key !== 'ArrowRight' &&
        key !== 'ArrowLeft' &&
        key !== 'ArrowDown' &&
        key !== 'ArrowUp' &&
        key !== 'Home' &&
        key !== 'End'
      ) {
        return;
      }

      const nextIdx = moveTabIndexFromArrow(
        idx,
        key,
        topicsWithIcons.length,
      );
      if (nextIdx === null) return;

      e.preventDefault();
      const nextTopic = topicsWithIcons[nextIdx];
      if (!nextTopic) return;
      updateTab(nextTopic.id);
      requestAnimationFrame(() => {
        document.getElementById(tabId(nextTopic.id))?.focus();
      });
    },
    [updateTab],
  );

  return (
    <div
      role="tablist"
      aria-label="Course work topics"
      onKeyDown={onTabListKeyDown}
      className="border-border grid shrink-0 grid-cols-7 gap-y-2 border-b px-2 py-4 sm:gap-x-2 sm:px-4 md:gap-x-3 md:px-6"
    >
      {topicsWithIcons.map((c, i) => (
        <div
          key={c.id}
          role="presentation"
          className="flex min-w-0 flex-1 basis-0 items-center justify-center gap-2 sm:gap-3 md:gap-4"
        >
          {i > 0 && i % TABLIST_COLS !== 0 && (
            <span
              className="bg-border h-4 w-px shrink-0 sm:h-5 md:h-6"
              aria-hidden
            />
          )}
          <CourseTab
            topic={c}
            isActive={activeTab === c.id}
            onActivate={() => updateTab(c.id)}
            reduceMotion={reduceMotion}
            tabPanelId={tabPanelId}
          />
        </div>
      ))}
    </div>
  );
}

function CourseContent({
  topic,
  reduceMotion,
  direction,
}: {
  topic: CourseTopic;
  reduceMotion: boolean;
  direction: 1 | -1;
}) {
  const { container, item } = courseContentMotion(reduceMotion, direction);

  return (
    <motion.article
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mx-auto w-full max-w-md space-y-2 px-6 text-left sm:px-12"
      aria-labelledby={`course-heading-${topic.id}`}
    >
      <motion.h2
        variants={item}
        id={`course-heading-${topic.id}`}
        className="font-dosis text-teal text-xl font-bold"
      >
        {topic.title}
      </motion.h2>
      <ul className="font-libre text-on-surface list-inside list-disc space-y-1">
        {topic.items.map((entry, i) =>
          Array.isArray(entry) ? (
            <motion.li key={i} variants={item}>
              {entry[0]}
              <ul className="mt-1 list-inside list-disc space-y-0.5">
                {entry.slice(1).map((sub, j) => (
                  <li key={j}>{sub}</li>
                ))}
              </ul>
            </motion.li>
          ) : (
            <motion.li key={i} variants={item}>
              {entry}
            </motion.li>
          ),
        )}
      </ul>
    </motion.article>
  );
}

interface CourseTabState {
  activeTab: string;
  direction: 1 | -1;
}

const initialTabState: CourseTabState = {
  activeTab: courseTopics[0].id,
  direction: 1,
};

const CourseWork: FC = () => {
  const [{ activeTab, direction }, setTabState] =
    useState<CourseTabState>(initialTabState);
  const topic = courseMap.get(activeTab) ?? courseTopics[0];
  const reducedMotionPreference = useReducedMotion();
  const reduceMotion = reducedMotionPreference === true;
  const tabPanelId = useId();

  const updateTab = useCallback((id: string) => {
    setTabState((prev) => {
      if (prev.activeTab === id) return prev;
      const nextIndex = topicOrder.get(id) ?? 0;
      const prevIndex = topicOrder.get(prev.activeTab) ?? 0;
      return {
        activeTab: id,
        direction: nextIndex >= prevIndex ? 1 : -1,
      };
    });
  }, []);

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
        <meta property="og:url" content={`${SITE_URL}/courses`} />
        <meta property="og:image" content={`${SITE_URL}/images/irfan.webp`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${topic.title} — Irfan Filipovic`}
        />
        <meta
          name="twitter:description"
          content={`Course work: ${topic.title}`}
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/irfan.webp`} />
      </Helmet>
      <section id="courses" className="flex min-h-0 flex-1 flex-col px-4 py-8">
        <div className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col">
          <div className="depth bg-surface-panel flex h-[min(70dvh,calc(100dvh-9rem))] min-h-0 flex-col overflow-hidden rounded-xl ring-1 ring-border">
            <CourseTabStrip
              activeTab={activeTab}
              updateTab={updateTab}
              reduceMotion={reduceMotion}
              tabPanelId={tabPanelId}
            />

            <div
              id={tabPanelId}
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`course-heading-${topic.id}`}
              className="relative flex min-h-0 flex-1 flex-col overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-surface-panel"
            >
              <div className="flex min-h-0 flex-1 flex-col items-center overflow-y-auto overscroll-contain p-8">
                <AnimatePresence mode="wait" initial={false}>
                  <CourseContent
                    key={activeTab}
                    topic={topic}
                    reduceMotion={reduceMotion}
                    direction={direction}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseWork;
