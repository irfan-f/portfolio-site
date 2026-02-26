export type CourseIcon =
  | 'brackets'
  | 'graphMaze'
  | 'database'
  | 'binary'
  | 'chart'
  | 'lambda'
  | 'memory'
  | 'stacks'
  | 'brain'
  | 'automation'
  | 'codeBlocks'
  | 'controller'
  | 'sigma';

export interface CourseTopic {
  id: string;
  title: string;
  items: (string | string[])[];
  icon?: CourseIcon;
}

export const courseTopics: CourseTopic[] = [
  {
    id: 'introCS',
    title: 'Intro to Computer Science',
    icon: 'brackets',
    items: [
      'Algorithmic problem solving',
      'OOP and design',
      'Virtual Machine (Arch Linux)',
    ],
  },
  {
    id: 'intermedAlgorithms',
    title: 'Intermediate Algorithms',
    icon: 'graphMaze',
    items: [
      'Graph searching',
      'Topological sort',
      "Kruskal's and Prim's methods",
      'Bellman-Ford and Floyd-Warshall algorithms',
      'Greedy algorithms',
    ],
  },
  {
    id: 'dataStructures',
    title: 'Intermediate Data Structures',
    icon: 'database',
    items: [
      'Structure operations',
      'Operation analysis',
      [
        'List of structures',
        'Lists',
        'Trees',
        'Heaps',
        'Stacks',
        'Queues',
        'Dictionaries',
        'Priority Queues',
      ],
    ],
  },
  {
    id: 'compOrganization',
    title: 'Computer Organization',
    icon: 'binary',
    items: [
      'Bitwise operations',
      'Machine-Level code',
      'Register manipulation',
      'x86-64 Assembly code',
      'Virtual Machine (Ubuntu)',
    ],
  },
  {
    id: 'softwareMethod',
    title: 'Software Methodologies',
    icon: 'chart',
    items: [
      'Software project management and lifecycle',
      'Software architecture',
      'Software design and modeling languages',
      'Project planning',
      'Requirements engineering',
      'Software testing',
      'User Interface design',
    ],
  },
  {
    id: 'princLanguages',
    title: 'Principles of Programming Languages',
    icon: 'lambda',
    items: [
      'Grammar, language, and parse trees',
      'Intro to Lambda Calculus',
      'Racket and ML',
      'Haskell',
      'Scope and storage management',
      'Monads',
    ],
  },
  {
    id: 'os',
    title: 'Operating Systems',
    icon: 'memory',
    items: [
      'Operating system structure',
      'Linux system calls',
      'Processes',
      'Interprocess communication',
      'Threads',
      'Scheduling',
      'Synchronization',
      'Deadlocks: Multi-object synchronization',
      'Memory management',
      'Paging and virtual memory',
      'File systems theory',
      'I/O systems',
    ],
  },
  {
    id: 'compArch',
    title: 'Computer Architecture',
    icon: 'stacks',
    items: [
      'RISC and CISC design',
      'Storage hierarchies (Memory and Cache)',
      'High-performance processor design',
      'Pipelining',
      'Vector processing',
    ],
  },
  {
    id: 'introAI',
    title: 'Intro to Artificial Intelligence',
    icon: 'automation',
    items: [
      'Uninformed and informed search',
      'Constraint satisfaction problems',
      'Game trees: Minimax and Expectimax',
      'Markov Decision Processes',
      'Reinforcement learning',
      'Bayes nets',
      'Hidden Markov Models',
    ],
  },
  {
    id: 'ML',
    title: 'Machine Learning',
    icon: 'brain',
    items: [
      'Decision trees',
      'Inductive learning',
      'Nearest Neighbor algorithm',
      'Perceptron algorithm',
      'Linear and Logistic regression',
      'Support Vector Machines',
      'Neural Networks and Convolutional NNs',
      'Deep Learning',
      'Optimizers and Initializers',
      'Recurrent NN',
    ],
  },
  {
    id: 'introEngineering',
    title: 'Intro to Software Engineering',
    icon: 'codeBlocks',
    items: [
      'Git and Linux basics',
      'Docker and Flask',
      'REST APIs',
      'Session management and security',
      'Authentication, forms, and login',
      ['Intro to databases', 'NoSQL', 'MongoDB'],
    ],
  },
  {
    id: 'game',
    title: 'Game Programming',
    icon: 'controller',
    items: [
      'Unity',
      'Linear Algebra (Games)',
      'Kanban organization',
      'Gameplay progression',
      '3D Math and Physics',
      'AI algorithms in games',
      [
        'Game patterns',
        'Command',
        'Flyweight',
        'Observer',
        'State',
        'Subclass Sandbox',
        'Spatial Partition',
      ],
    ],
  },
  {
    id: 'math',
    title: 'Mathematics',
    icon: 'sigma',
    items: [
      'Discrete mathematics',
      'Calculus',
      'Networks and combinatorics',
      'Statistic models and mathematics',
    ],
  },
];
