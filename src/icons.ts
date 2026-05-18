import ifIcon from './assets/icons/if.svg?raw';
import sunIcon from './assets/icons/sun.svg?raw';
import moonIcon from './assets/icons/moon.svg?raw';
import defaultModeIcon from './assets/icons/default_mode.svg?raw';
import menuIcon from './assets/icons/menu.svg?raw';
import closeIcon from './assets/icons/close.svg?raw';
import homeIcon from './assets/icons/home.svg?raw';
import forwardArrowIcon from './assets/icons/forwardArrow.svg?raw';
import bracketsIcon from './assets/icons/courses/brackets.svg?raw';
import graphMazeIcon from './assets/icons/courses/graph-maze.svg?raw';
import databaseIcon from './assets/icons/courses/database.svg?raw';
import binaryIcon from './assets/icons/courses/binary.svg?raw';
import chartIcon from './assets/icons/courses/chart.svg?raw';
import lambdaIcon from './assets/icons/courses/lambda.svg?raw';
import memoryIcon from './assets/icons/courses/memory.svg?raw';
import stacksIcon from './assets/icons/courses/stacks.svg?raw';
import brainIcon from './assets/icons/courses/brain.svg?raw';
import automationIcon from './assets/icons/courses/automation.svg?raw';
import codeBlocksIcon from './assets/icons/courses/code-blocks.svg?raw';
import controllerIcon from './assets/icons/courses/controller.svg?raw';
import sigmaIcon from './assets/icons/courses/sigma.svg?raw';

export const icons = {
  if: ifIcon,
  sun: sunIcon,
  moon: moonIcon,
  defaultMode: defaultModeIcon,
  menu: menuIcon,
  close: closeIcon,
  home: homeIcon,
  forwardArrow: forwardArrowIcon,
  courses: {
    brackets: bracketsIcon,
    graphMaze: graphMazeIcon,
    database: databaseIcon,
    binary: binaryIcon,
    chart: chartIcon,
    lambda: lambdaIcon,
    memory: memoryIcon,
    stacks: stacksIcon,
    brain: brainIcon,
    automation: automationIcon,
    codeBlocks: codeBlocksIcon,
    controller: controllerIcon,
    sigma: sigmaIcon,
  },
} as const;
