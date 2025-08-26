import React, { FC, useState } from 'react';

const CourseWork: FC = () => {
  const [state, setState] = useState({
    coursePaneLeft: [
      { id: 'homeTab', title: 'Home' },
      { id: 'introCS', title: 'Intro to Computer Science' },
      { id: 'intermedAlgorithms', title: 'Intermediate Algorithms' },
      { id: 'dataStructures', title: 'Intermediate Data Structures' },
      { id: 'compOrganization', title: 'Computer Organization' },
      { id: 'softwareMethod', title: 'Software Methodologies' },
      { id: 'princLanguages', title: 'Principles of Programming' },
    ],
    coursePaneRight: [
      { id: 'os', title: 'Operating Systems' },
      { id: 'compArch', title: 'Computer Architecture' },
      { id: 'introAI', title: 'Intro Artificial Intelligence' },
      { id: 'ML', title: 'Machine Learning' },
      { id: 'introEngineering', title: 'Intro to Software Engineering' },
      { id: 'game', title: 'Game Programming' },
      { id: 'math', title: 'Mathematics' },
    ],
    activeTab: 'homeTab',
  });

  const updateTab = (id: any) => {
    setState({
      ...state,
      activeTab: id,
    });
  };

  return (
    <React.Fragment>
      <div className="course container" id="courses">
        <div className="row"></div>
        <div className="row">
          <div className="col" id="courseT">
            <h1 id="titleC">
              <em>Course Work</em>
            </h1>
          </div>
        </div>
        <hr id="breakFoot"></hr>
        <div className="row">
          <div className="col-3">
            <div className="list-group col" id="myList1" role="tablist">
              {state.coursePaneLeft.map((value) => {
                return (
                  <span
                    className={`list-group-item text-responsive list-group-item-action${state.activeTab === value.id ? 'active' : ''}`}
                    onClick={() => updateTab(value.id)}
                    role="tab"
                    key={value.id}
                  >
                    {value.title}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="col-6">
            <div className="tab-content">
              <div
                className={`tab-pane${state.activeTab === 'homeTab' ? 'active' : ''}`}
                id="homeTab"
                role="tabpanel"
              >
                <h4>Home</h4>
                <ul style={{ listStyle: 'None' }}>
                  <li>All courses were taken at the University of Oregon</li>
                  <li>
                    Assignments and projects for several courses are available
                    on my GitHub
                  </li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'introCS' ? 'active' : ''}`}
                id="introCS"
                role="tabpanel"
              >
                <h4>Intro to Computer Science</h4>
                <ul>
                  <li>Algorithmic problem solving</li>
                  <li>OOP and design</li>
                  <li>Virtual Machine (Arch Linux)</li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'dataStructures' ? 'active' : ''}`}
                id="dataStructures"
                role="tabpanel"
              >
                <h4>Intermediate Data Structures</h4>
                <ul>
                  <li>Structure operations</li>
                  <li>Operation analysis</li>
                  <li>
                    List of structures
                    <ul>
                      <li>Lists</li>
                      <li>Trees</li>
                      <li>Heaps</li>
                      <li>Stacks</li>
                      <li>Queues</li>
                      <li>Dictionaries</li>
                      <li>Priority Queues</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'compOrganization' ? 'active' : ''}`}
                id="compOrganization"
                role="tabpanel"
              >
                <h4>Computer Organization</h4>
                <ul>
                  <li>Bitwise operations</li>
                  <li>Machine-Level code</li>
                  <li>Register manipulation</li>
                  <li>x/y 86-64 Assembly code</li>
                  <li>Virtual Machine (Ubuntu)</li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'intermedAlgorithms' ? 'active' : ''}`}
                id="intermedAlgorithms"
                role="tabpanel"
              >
                <h4>Intermediate Algorithms</h4>
                <ul>
                  <li>Graph searching</li>
                  <li>Topological sort</li>
                  <li>Kruskal's and Prim's methods</li>
                  <li>Bellman-Ford and Floyd-Warshall algorithms</li>
                  <li>Greedy algorithms</li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'princLanguages' ? 'active' : ''}`}
                id="princLanguages"
                role="tabpanel"
              >
                <h4>Principles of Programming Languages</h4>
                <ul>
                  <li>Grammar, language, and parse trees</li>
                  <li>Intro to Lambda Calculus</li>
                  <li>Racket and ML</li>
                  <li>Haskell</li>
                  <li>Scope and storage management</li>
                  <li>Monads</li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'introEngineering' ? 'active' : ''}`}
                id="introEngineering"
                role="tabpanel"
              >
                <h4>Intro to Software Engineering</h4>
                <ul>
                  <li>Git and Linux basics</li>
                  <li>Docker and Flask</li>
                  <li>REST APIs</li>
                  <li>Session management and security</li>
                  <li>Authentication, forms, and login</li>
                  <li>
                    Intro to databases
                    <ul>
                      <li>NoSQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'os' ? 'active' : ''}`}
                id="os"
                role="tabpanel"
              >
                <h4>Operating Systems</h4>
                <ul>
                  <li>Operating system structure</li>
                  <li>Linux system calls</li>
                  <li>Processes</li>
                  <li>Interprocess communication</li>
                  <li>Threads</li>
                  <li>Scheduling</li>
                  <li>Synchronization</li>
                  <li>Deadlocks: Multi-object synchronization</li>
                  <li>Memory management</li>
                  <li>Paging and virtual memory</li>
                  <li>File systems theory</li>
                  <li>I/O systems</li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'compArch' ? 'active' : ''}`}
                id="compArch"
                role="tabpanel"
              >
                <h4>Computer Architecture</h4>
                <ul>
                  <li>RISC and CISC design</li>
                  <li>Storage hierarchies (Memory and Cache)</li>
                  <li>High-performance processor design</li>
                  <li>Pipelining</li>
                  <li>Vector processing</li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'introAI' ? 'active' : ''}`}
                id="introAI"
                role="tabpanel"
              >
                <h4>Intro to Artificial Intelligence</h4>
                <ul>
                  <li>Uninformed and informed search</li>
                  <li>Constraint satisfaction problems</li>
                  <li>Game trees: Minimax and Expectimax</li>
                  <li>Markov Decision Processes</li>
                  <li>Reinforcement learning</li>
                  <li>Bayes nets</li>
                  <li>Hidden Markov Models</li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'ML' ? 'active' : ''}`}
                id="ML"
                role="tabpanel"
              >
                <h4>Machine Learning</h4>
                <ul>
                  <li>Decision trees</li>
                  <li>Inductive learning</li>
                  <li>Nearest Neighbor algorithm</li>
                  <li>Perceptron algorithm</li>
                  <li>Linear and Logistic regression</li>
                  <li>Support Vector Machines</li>
                  <li>Neural Networks and Convolutional NNs</li>
                  <li>Deep Learning</li>
                  <li>Optimizers and Intializers</li>
                  <li>Recurrent NN</li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'softwareMethod' ? 'active' : ''}`}
                id="softwareMethod"
                role="tabpanel"
              >
                <h4>Software Methodologies</h4>
                <ul>
                  <li>Software project management and lifecycle</li>
                  <li>Software architecture</li>
                  <li>Software design and modeling languages</li>
                  <li>Project planning</li>
                  <li>Requirements engineering</li>
                  <li>Software testing</li>
                  <li>User Interface design</li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'game' ? 'active' : ''}`}
                id="game"
                role="tabpanel"
              >
                <h4>Game Programming</h4>
                <ul>
                  <li>Unity</li>
                  <li>Linear Algebra (Games)</li>
                  <li>Kanban organization</li>
                  <li>Gameplay progression</li>
                  <li>3D Math and Physics</li>
                  <li>AI algorithms in games</li>
                  <li>
                    Game patterns
                    <ul>
                      <li>Command</li>
                      <li>Flyweight</li>
                      <li>Observer</li>
                      <li>State</li>
                      <li>Subclass Sandbox</li>
                      <li>Spatial Partition</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div
                className={`tab-pane${state.activeTab === 'math' ? 'active' : ''}`}
                id="math"
                role="tabpanel"
              >
                <h4>Mathematics</h4>
                <ul>
                  <li>Discrete mathematics</li>
                  <li>Calculus</li>
                  <li>Networks and combinatorics</li>
                  <li>Statistic models and mathematics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="list-group col right" id="myList2" role="tablist">
              {state.coursePaneRight.map((value) => {
                return (
                  <span
                    className={`list-group-item text-responsive list-group-item-action${state.activeTab === value.id ? 'active' : ''}`}
                    onClick={() => updateTab(value.id)}
                    role="tab"
                    key={value.id}
                  >
                    {value.title}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <hr id="breakFoot"></hr>
      </div>
    </React.Fragment>
  );
};

export default CourseWork;
