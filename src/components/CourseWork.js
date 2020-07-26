import React from "react";
import "./CourseWork.css"
import picture from "../photos/picture-3817.png"

class CourseWork extends React.Component {
    constructor() {
        super()
        this.state = { 
            active1: true,
            active2: false
        }
        this.disable = this.disable.bind(this)
    }

    disable(e) {
        this.setState({
            active1: !this.state.active1,
            active2: !this.state.active2
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container course" id="courses">
                    <div className="row">
                        <div className="col" id="picUO">
                            <img alt="courseWork" src={picture}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" id="courseT">
                            <h1 id="titleC"><em>Course Work</em></h1>
                        </div>
                    </div>
                    <hr noshade="true" id="breakFoot"></hr>
                    <div className="row">
                        <div className="col-3">
                            <div 
                                className="list-group" 
                                id="myList1" 
                                role="tablist"
                                onClick={(e) => (document.querySelector("#myList2 > span.list-group-item.list-group-item-action.active") ? document.querySelector("#myList2 > span.list-group-item.list-group-item-action.active").classList.remove("active") : "")}
                            >
                                <span className="list-group-item text-responsive list-group-item-action active" data-toggle="list" href="#hometab" role="tab">Home</span>
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#introCS" role="tab">Intro to Computer Science</span>
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#dataStructures" role="tab">Intermediate Data Structures</span>
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#intermedAlgorithms" role="tab">Intermediate Algorithms</span>
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#compOrganization" role="tab">Computer Organization</span>
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#softwareMethod" role="tab">Software Methodologies</span>
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#princLanguages" role="tab">Principles of Programming</span>
                                
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="tab-content">
                                <div className="tab-pane active" id="hometab" role="tabpanel">
                                    <h4>Home</h4>
                                    <ul style={{listStyle: "None"}}>
                                        <li>All courses were taken at the University of Oregon</li>
                                        <li>Select a course title to view the material covered</li>
                                        <li>Assignments and projects for several courses are available on my GitHub</li>
                                    </ul>
                                </div>
                                <div className="tab-pane" id="introCS" role="tabpanel">
                                    <h4>Intro to Computer Science</h4>
                                    <ul>
                                    <li>Algorithmic problem solving</li>
                                    <li>OOP and design</li>
                                    <li>Virtual Machine (Arch Linux)</li>
                                    </ul>
                                </div>
                                <div className="tab-pane" id="dataStructures" role="tabpanel">
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
                                <div className="tab-pane" id="compOrganization" role="tabpanel">
                                    <h4>Computer Organization</h4>
                                    <ul>
                                        <li>Bitwise operations</li>
                                        <li>Machine-Level code</li>
                                        <li>Register manipulation</li>
                                        <li>x/y 86-64 Assembly code</li>
                                        <li>Virtual Machine (Ubuntu)</li>
                                    </ul>
                                </div>
                                <div className="tab-pane" id="intermedAlgorithms" role="tabpanel">
                                    <h4>Intermediate Algorithms</h4>
                                    <ul>
                                        <li>Graph searching</li>
                                        <li>Topological sort</li>
                                        <li>Kruskal's and Prim's methods</li>
                                        <li>Bellman-Ford and Floyd-Warshall algorithms</li>
                                        <li>Greedy algorithms</li>
                                    </ul>
                                </div>
                                <div className="tab-pane" id="princLanguages" role="tabpanel">
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
                                <div className="tab-pane" id="introEngineering" role="tabpanel">
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
                                <div className="tab-pane" id="os" role="tabpanel">
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
                                <div className="tab-pane" id="compArch" role="tabpanel">
                                    <h4>Computer Architecture</h4>
                                    <ul>
                                        <li>RISC and CISC design</li>
                                        <li>Storage hierarchies (Memory and Cache)</li>
                                        <li>High-performance processor design</li>
                                        <li>Pipelining</li>
                                        <li>Vector processing</li>
                                    </ul>
                                </div>
                                <div className="tab-pane" id="introAI" role="tabpanel">
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
                                <div className="tab-pane" id="ML" role="tabpanel">
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
                                <div className="tab-pane" id="softwareMethod" role="tabpanel">
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
                                <div className="tab-pane" id="game" role="tabpanel">
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
                                <div className="tab-pane" id="math" role="tabpanel">
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
                            <div 
                                className="list-group right" 
                                id="myList2" 
                                role="tablist"
                                onClick={(e) => (document.querySelector("#myList1 > span.list-group-item.list-group-item-action.active") ? document.querySelector("#myList1 > span.list-group-item.list-group-item-action.active").classList.remove("active") : "")}
                            >
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#os" role="tab">Operating Systems</span>
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#compArch" role="tab">Computer Architecture</span>
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#introAI" role="tab">Intro Artificial Intelligence</span>
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#ML" role="tab">Machine Learning</span>
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#introEngineering" role="tab">Intro to Software Engineering</span>
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#game" role="tab">Game Programming</span>
                                <span className="list-group-item text-responsive list-group-item-action" data-toggle="list" href="#math" role="tab">Mathematics</span>
                            </div>
                        </div>
                    </div>
                    <hr noshade="true" id="breakFoot"></hr>
                </div>
            </React.Fragment>
        );
    }
};

export default CourseWork;

