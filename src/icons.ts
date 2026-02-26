import ifIcon from './assets/icons/if.svg?raw';
import sunIcon from './assets/icons/sun.svg?raw';
import moonIcon from './assets/icons/moon.svg?raw';
import defaultModeIcon from './assets/icons/default_mode.svg?raw';
import menuIcon from './assets/icons/menu.svg?raw';
import homeIcon from './assets/icons/home.svg?raw';
import forwardArrowIcon from './assets/icons/forwardArrow.svg?raw';
import bracketsIcon from './assets/icons/courses/brackets.svg?raw';
import graphMazeIcon from './assets/icons/courses/graph-maze.svg?raw';
import treeIcon from './assets/icons/courses/tree.svg?raw';
import binaryIcon from './assets/icons/courses/binary.svg?raw';
import ganttIcon from './assets/icons/courses/gantt.svg?raw';
import lambdaIcon from './assets/icons/courses/lambda.svg?raw';
import cpuIcon from './assets/icons/courses/cpu.svg?raw';
import cacheHierarchyIcon from './assets/icons/courses/cache-hierarchy.svg?raw';
import brainIcon from './assets/icons/courses/brain.svg?raw';
import neuronIcon from './assets/icons/courses/neuron.svg?raw';
import codeTagIcon from './assets/icons/courses/code-tag.svg?raw';
import gamepadIcon from './assets/icons/courses/gamepad.svg?raw';
import sigmaIcon from './assets/icons/courses/sigma.svg?raw';

export const icons = {
  if: ifIcon,
  sun: sunIcon,
  moon: moonIcon,
  defaultMode: defaultModeIcon,
  menu: menuIcon,
  home: homeIcon,
  forwardArrow: forwardArrowIcon,
  courses: {
    brackets: bracketsIcon,
    graphMaze: graphMazeIcon,
    tree: treeIcon,
    binary: binaryIcon,
    gantt: ganttIcon,
    lambda: lambdaIcon,
    cpu: cpuIcon,
    cacheHierarchy: cacheHierarchyIcon,
    brain: brainIcon,
    neuron: neuronIcon,
    codeTag: codeTagIcon,
    gamepad: gamepadIcon,
    sigma: sigmaIcon,
  },
} as const;
