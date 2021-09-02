import OptumLogo from '../../../public/images/Optum_Logo.jpeg';
import FirstHTMLPage from '../../../public/images/First_HTML_Page.png';
import GitHubPage from '../../../public/images/GitHub_Page.png';
import MemoryGame from '../../../public/images/Memory_Game.png';
import PomoHero from '../../../public/images/PomoHero.png';
import TickTackToe from '../../../public/images/Tick_Tack_Toe.png';
import PyMySQL from '../../../public/images/PyMySQL.png';
import FileCompression from '../../../public/images/File_Compression.png';
import AdvancedGraphAlgorithms from '../../../public/images/Advanced_Graph_Algorithms.png';

export interface ImageProps {
  /**
   * Project image to be displayed
   */
  img: StaticImageData;

  /**
   * Title for the project
   */
  title: string;

  /**
   * Description for the project
   */
  description: string;

  /**
   * Link to the project
   */
  link: string;

  /**
   * Technologies used for this project
   */
  techStack: string;
}

/**
 * Array of project items
 */
export const ImageData: ImageProps[] = [
  {
    img: OptumLogo,
    title: "Intern @ Optum",
    description: "A Client Portal for recording and displaying Client Data",
    link: "",
    techStack: "React.js, TypeScript, Redux, Material-UI, Formik, Yup"
  },
  {
    img: PomoHero,
    title: "Group Project @ UC San Diego",
    description: "An Application to help users manage time effectively",
    link: "https://pomo-hero.web.app",
    techStack: "HTML/CSS, JavaScript"
  },
  {
    img: MemoryGame,
    title: "Personal Project",
    description: "A Game to test your memory power and skills",
    link: "https://ynshah3.github.io/MemoryGame",
    techStack: "HTML/CSS, JavaScript"
  },
  {
    img: FirstHTMLPage,
    title: "Personal Project",
    description: "A Web-page showcasing the power of pure HTML and CSS",
    link: "https://ynshah3.github.io/About",
    techStack: "HTML"
  },
  {
    img: GitHubPage,
    title: "Personal Project",
    description: "A Web-page written in Markdown",
    link: "https://ynshah3.github.io/",
    techStack: "Markdown"
  },
  {
    img: TickTackToe,
    title: "Personal Project",
    description: "A Game to play Tick Tack Toe in a single/double player mode",
    link: "https://github.com/ynshah3/Tick-Tack-Toe",
    techStack: "Python"
  },
  {
    img: PyMySQL,
    title: "Personal Project",
    description: "A Library Management System with a user/admin access mode",
    link: "https://github.com/ynshah3/Library-Management-System",
    techStack: "Python, MySQL"
  },
  {
    img: AdvancedGraphAlgorithms,
    title: "Personal Project",
    description: "Implements some advanced graph algorithms like BFS, Dijkstra's algorithm and Disjoint Sets",
    link: "",
    techStack: "C++"
  },
  {
    img: FileCompression,
    title: "Personal Project",
    description: "A way lossless-ly reduce the storage size of files",
    link: "",
    techStack: "C++"
  }
];
