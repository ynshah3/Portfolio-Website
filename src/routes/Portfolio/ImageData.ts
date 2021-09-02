import OptumLogo from '../../../public/images/Optum_Logo.jpeg';
import FirstHTMLPage from '../../../public/images/First_HTML_Page.png';
import GitHubPage from '../../../public/images/GitHub_Page.png';
import MemoryGame from '../../../public/images/Memory_Game.png';
import PomoHero from '../../../public/images/PomoHero.png';

export interface ImageProps {
  img: StaticImageData;
  title: string;
  description: string;
  link: string;
  techStack: string;
}

export const ImageData: ImageProps[] = [
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
    img: GitHubPage,
    title: "Personal Project",
    description: "A Web-page written in Markdown",
    link: "https://ynshah3.github.io/",
    techStack: "Markdown"
  },
  {
    img: OptumLogo,
    title: "Intern @ Optum",
    description: "A Client Portal for recording and displaying Client Data",
    link: "",
    techStack: "React.js, TypeScript, Redux, Material-UI, Formik, Yup"
  },
  {
    img: FirstHTMLPage,
    title: "Personal Project",
    description: "A Web-page showcasing the power of pure HTML and CSS",
    link: "https://ynshah3.github.io/About",
    techStack: "HTML"
  }
];
