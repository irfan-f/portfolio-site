import React from "react";
import "./CourseWork.css"

const CourseWork = () => {
  return (
    <React.Fragment>
        <div className="course">
            <div className="row">
                <div className="col" id="aboutMe">
                    <h1 id="titleC"><em>Course Work</em></h1>
                </div>
            </div>
            <div className="row" id="picOfMe">
                <div className="col">
                    <img alt="courseWork" src="data:image/png;base64,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"></img>
                </div>
            </div>
            <hr noshade="true" id="breakFoot"></hr>
            <div className="row">
                <div className="col" id="classes">
                    <h5>Intro to Computer Science</h5>
                    <ul>
                        <li>Algorithmic problem solving</li>
                        <li>OOP and design</li>
                        <li>Virtual Machine (Arch Linux)</li>
                    </ul>
                    <div className="dropdown-classes">
                        <h5>Intermediate Data Structures</h5>
                        <ul>
                            <li>Structure operations</li>
                            <li>Operation analysis</li>
                            <li>&middot;Hover&middot; for structures</li>
                        </ul>
                        <div className="structure-drop">
                            <ul>
                                <li>Lists</li>
                                <li>Trees</li>
                                <li>Heaps</li>
                                <li>Stacks</li>
                                <li>Queues</li>
                                <li>Dictionaries</li>
                                <li>Priority Queues</li>
                            </ul>
                        </div>
                    </div>
                    <br></br>
                    <h5>Computer Organization</h5>
                    <ul>
                        <li>Bitwise operations</li>
                        <li>Machine-Level code</li>
                        <li>Register manipulation</li>
                        <li>x/y 86-64 Assembly code</li>
                        <li>Virtual Machine (Ubuntu)</li>
                    </ul>
                </div>
                <div className="col" id="classes">
                    <h5>Intermediate Algorithms</h5>
                    <ul>
                        <li>Graph searching</li>
                        <li>Topological sort</li>
                        <li>Kruskal's and Prim's methods</li>
                        <li>Bellman-Ford and Floyd-Warshall algorithms</li>
                        <li>Greedy algorithms</li>
                    </ul>
                    <h5>Intro to Software Engineering</h5>
                    <ul>
                        <li>Git and Linux basics</li>
                        <li>Docker and Flask</li>
                        <li>
                            Intro to databases
                            <ul>
                                <li>NoSQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </li>
                        <li>REST APIs</li>
                        <li>Session management and security</li>
                        <li>Authentication, forms, and login</li>
                    </ul>
                </div>
                <div className="col" id="classes">
                    <h5>Principles of Programming Languages</h5>
                    <ul>
                        <li>Grammar, language, and parse trees</li>
                        <li>Intro to Lambda Calculus</li>
                        <li>Racket and ML</li>
                        <li>Haskell</li>
                        <li>Scope and storage management</li>
                        <li>Monads</li>
                    </ul>
                    <h5>Intro to Software Engineering</h5>
                    <ul>
                        <li>Git and Linux basics</li>
                        <li>Docker and Flask</li>
                        <li>
                            Intro to databases
                            <ul>
                                <li>NoSQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </li>
                        <li>REST APIs</li>
                        <li>Session management and security</li>
                        <li>Authentication, forms, and login</li>
                    </ul>
                </div>
            </div>
            <hr noshade="true" id="breakFoot"></hr>
            <div className="row">
                <div className="col" id="classes">
                    <h5>Operating Systems</h5>
                    <ul>
                        <li>Operating system structure</li>
                        <li>Linux system calls</li>
                        <li>Processes</li>
                        <li>Interprocess communication</li>
                        <li>Threads</li>
                        <li>Scheduling</li>
                        <li>Synchronization</li>
                        <li>Deadlocks: Multi-object sync</li>
                        <li>Memory management</li>
                        <li>Paging and virtual memory</li>
                        <li>File systems theory</li>
                        <li>I/O systems</li>
                    </ul>
                    <h5>Software Methodologies</h5>
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
                <div className="col" id="classes">
                    <h5>Intro to Artificial Intelligence</h5>
                    <ul>
                        <li>Uninformed and informed search</li>
                        <li>Constraint satisfaction problems</li>
                        <li>Game trees: Minimax and Expectimax</li>
                        <li>Markov Decision Processes</li>
                        <li>Reinforcement learning</li>
                        <li>Bayes nets</li>
                        <li>Hidden Markov Models</li>
                    </ul>
                    <h5>Game Programming</h5>
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
                <div className="col" id="classes">
                    <h5>Machine Learning</h5>
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
                    <h5>Computer Architecture</h5>
                    <ul>
                        <li>RISC and CISC design</li>
                        <li>Storage hierarchies (Memory and Cache)</li>
                        <li>High-performance processor design</li>
                        <li>Pipelining</li>
                        <li>Vector processing</li>
                    </ul>
                    <h5>Mathematics</h5>
                    <ul>
                        <li>Discrete mathematics</li>
                        <li>Calculus</li>
                        <li>Networks and combinatorics</li>
                        <li>Statistic models and mathematics</li>
                    </ul>
                </div>
            </div>
            <hr noshade="true" id="breakFoot"></hr>
        </div>
    </React.Fragment>
  );
};

export default CourseWork;

