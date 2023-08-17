import Work1 from "../../assets/work-1.svg";
import Work2 from "../../assets/work-2.svg";
import Work3 from "../../assets/work-3.svg";
import Work4 from "../../assets/work-4.svg";
import Work5 from "../../assets/work-5.svg";
import Work6 from "../../assets/work-6.svg";
import qas from "../../assets/projects/qas.png";
import taQueue from "../../assets/projects/ta-queue.png";
import scheduledPublishing from "../../assets/projects/scheduled-publishing.png";
import lot from "../../assets/projects/lot.png";
import uberMoves from "../../assets/projects/uber-moves.png";
import pacman from "../../assets/projects/pacman.gif";
import pacmanRect from "../../assets/projects/pacman_rect.gif";

const Menu = [
  {
    id: 1,
    image: pacman,
    title: "PacMan AI",
    subtitle: "Game Playing AI",
    languages: ["Python"],
    category: "AI/ML",
    description:
      "A comprehensive AI framework tailored for PacMan's world, integrating search algorithms, adversarial strategies, and reinforcement learning techniques to optimize gameplay.",
    github: "https://github.com/han-ngo/Pacman-AI",
    demo: "",
    youtube: "",
    link_num: 1,
  },
  {
    id: 2,
    image: scheduledPublishing,
    title: "Scheduled Publishing",
    subtitle: "",
    languages: ["JS", "HTML/CSS"],
    category: "Front-End",
    description:
      "This project integrated within Oracle Content Management System introduces multichannel calendaring and scheduled publishing capabilities, allowing seamless content delivery planning and scheduling across various departments and channels, enhancing collaboration and version control while providing centralized publishing controls.",
    github: "",
    demo: "https://www.oracle.com/content-management/cx/video-content-creation-delivery/#content-calendaring",
    youtube: "https://youtu.be/U9XK2mjErGU",
    link_num: 2,
  },
  {
    id: 3,
    image: Work2,
    title: "Pathfinding Visualizer",
    subtitle: "Graph Algorithms Visualization",
    languages: ["JS", "React", "HTML/CSS"],
    category: "Full Stack",
    description:
      "An interactive web application crafted to visualize complex graph algorithms like Dijkstra's and A*, allowing users to customize and analyze paths.",
    github: "",
    demo: "",
    youtube: "",
    link_num: 0,
  },
  {
    id: 4,
    image: taQueue,
    title: "Canvas TA Queue",
    subtitle: "Canvas New Feature",
    languages: ["JS", "Ruby", "Rails", "React", "Redux", "PostgreSQL"],
    category: "Full Stack",
    description:
      "A TA (Teaching Assistant) Queue integrated directly within the widely-used Canvas LMS platform offers a centralized solution for schools worldwide – streamlining TA assistance, optimizing teaching assistance allocation and fostering student success by preventing redundant applications and offering additional features like remote video conferences, insightful statistics, and an intelligent scheduling system.",
    github: "https://github.com/taQueue/taQueue.github.io",
    demo: "https://taqueue.github.io/",
    youtube: "https://youtu.be/IoyKYE-TxcQ",
    link_num: 3,
  },
  {
    id: 5,
    image: uberMoves,
    title: "Uber-Moves",
    subtitle: "Data Visualization",
    languages: ["JS", "D3.js"],
    category: "Data Visualization",
    description:
      "A data visualization project provides an intuitive visual analysis of Uber pickup trends, helping drivers optimize their positioning and timing for maximum efficiency. It utilizes cluster, circle, and heatmap mapping, along with interactive selections for specific days and hours. Additionally, the project features informative charts and preset buttons for quick access to key insights.",
    github: "https://github.com/han-ngo/Uber-Moves",
    demo: "https://ubermoves.github.io/",
    youtube: "https://www.youtube.com/watch?v=FhwzNX8fo6Y",
    link_num: 3,
  },
  {
    id: 6,
    image: qas,
    title: "Question Answering System",
    subtitle: "",
    languages: ["Python", "spaCy", "scikit-learn"],
    category: "NLP",
    description:
      "A question answering system to answer questions collected from the Canadian Broadcasting Corporation webpage for kids – achieving a recall score of 0.52 using TF-IDF and Cosine Similarity to extract answers from natural language questions, refined with 0.40 precision through techniques like Part-of-Speech and Named Entity Recognition.",
    github: "https://github.com/TSunny007/CBC-Question-Answering",
    demo: "https://docs.google.com/presentation/d/19NuQ0ANShdLkJFzadM-Cm51W99Dno5-yTLuxrEBjLFQ/edit?usp=sharing",
    youtube: "https://youtu.be/Br5_g-WhFyY",
    link_num: 3,
  },
  {
    id: 7,
    image: lot,
    title: "Learning Outcome Tracker",
    subtitle: "",
    languages: ["C#", "ASP.NET", "AJAX", "Bootstrap", "MySQL"],
    category: "Full Stack",
    description:
      "A web application facilitates course assessment within the School of Computing (University of Utah) by establishing clear learning outcomes, enabling professors to associate evaluation metrics with each outcome, and facilitating student work submission for evaluation. The project also includes features like user role customization, student feedback collection, course ranking, and a search bar for courses.",
    github: "",
    demo: "",
    youtube: "https://youtu.be/Jmb0Ax4GMQw",
    link_num: 1,
  },
  {
    id: 8,
    image: Work3,
    title: "ThreeJS Portfolio",
    subtitle: "3D Visualization and Interactive Web App",
    languages: ["JS", "React", "ThreeJS"],
    category: "Full Stack",
    description:
      "An interactive web application leveraging Three.js to showcase immersive 3D visualizations.",
    github: "",
    demo: "",
    youtube: "",
    link_num: 0,
  },
];

export default Menu;
