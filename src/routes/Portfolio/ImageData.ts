import PayPalLogo from '../../../public/images/pic_with_interns.jpeg';
import OptumLogo from '../../../public/images/Optum_Logo.jpeg';
import CNNLogo from '../../../public/images/cnn.png';
import HCILogo from '../../../public/images/hxi.png';
import UCSDLogo from '../../../public/images/ucsd.jpeg';
import TBPLogo from '../../../public/images/tbp.png';
import ICLogo from '../../../public/images/image_captioning.png';
import ClassificationLogo from '../../../public/images/classify.png';
import NLPLogo from '../../../public/images/nlp.png';
import PomoHero from '../../../public/images/PomoHero.png';
import FileCompression from '../../../public/images/File_Compression.png';
import Nachos from '../../../public/images/nachos.png';
import CS from '../../../public/images/cs.png';
import Cache from '../../../public/images/cache.png';

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
    img: PayPalLogo,
    title: "Software Engineer Intern @ PayPal",
    description: "I enabled network tokenization first for payment transaction processing for PayPal and Braintree's merchant partners in order to improve security and optimize authorization rates. Worked towards improving authorization rates by around 40% for some merchants.",
    link: "",
    techStack: "Ruby on Rails, Datadog, PostgreSQL, Vim"
  },
  {
    img: OptumLogo,
    title: "Technology Development Intern @ Optum",
    description: "I developed a client portal to allow Optum's developers to makes requests for HEMI API services. I also designed dynamic forms to enhance performance by storing content on the server rather than on the client side.",
    link: "",
    techStack: "React.js, Material-UI, Redux, TypeScript"
  },
  {
    img: CNNLogo,
    title: "Deep Learning Researcher @ GURU",
    description: "Being inspired from processes within the primate visual cortex, I am focusing my research with Dr. Garrison Cottrell on the concept of divisive normalization and surround suppression to let only the highest and most significant activation from a neuron to be propagated forward the most.",
    link: "",
    techStack: "Python, PyTorch, Kubernetes, Convolutional Neural Networks"
  },
  {
    img: HCILogo,
    title: "HCI Researcher @ Weibel Lab",
    description: "I am involved with the design, development, and research of an online contouring education website that would enable medical professionals to better be able to identify cancer cells prior to treatment with Dr. Nadir Weibel.",
    link: "",
    techStack: "HTML/CSS, Vanilla JavaScript, Python, UI Design, UX Research"
  },
  {
    img: UCSDLogo,
    title: "CSE 151B: Deep Learning Tutor",
    description: "I hold one-on-one sessions with students, guiding them through any questions they might have and explaining difficult concepts from lecture. I lead the setup and questions for one of the programming assignments, and helped grade reports, and came up with questions for the exams.",
    link: "",
    techStack: "Teaching, Communication, Writing"
  },
  {
    img: TBPLogo,
    title: "Secretary @ Tau Beta Pi CA Y",
    description: "Responsible for assisting with the initiation process. Liaison between the national organization and the chapter, which includes submitting necessary forms and leading email correspondence. Host social and professional events for members and initiates.",
    link: "",
    techStack: "Leadership, Teamwork, Communication, Event planning"
  },
  {
    img: ICLogo,
    title: "Supervised Image Captioning",
    description: "I finetuned a pre-trained a ResNet-50 to generate embeddings of images, and then fed those and the reference caption embeddings to a two-layer LSTM to generate captions for the images. Achieved a BLEU-1 score of 66.77% and a BLEU-4 score of 7.27% on the MS-COCO 2015 dataset.",
    link: "",
    techStack: "Python, PyTorch, Kubernetes, LSTMs, CNNs"
  },
  {
    img: ClassificationLogo,
    title: "Supervised Image Classification",
    description: "I finetuned a VGG-16 model by selectively freezing layers 6 through 11, using data augmentation, stochastic gradient descent with nesterov momentum, an annealing cosine learning rate scheduler, an trained it for 50 epochs to get an 84.2% test accuracy for image classification on the Food-101 dataset.",
    link: "",
    techStack: "Python, PyTorch, Kubernetes, CNNs, Hyperparameter tuning"
  },
  {
    img: NLPLogo,
    title: "Statistical Sequence Tagging",
    description: "I trained a 4-gram hidden markov model and used the Viterbi Algorithm to fins a sequence of tags that maximized the probability of the sequence of words and the identified tags occurring together. I am able to get a precision of 0.54, recall of 0.37, and an F1 score of 0.44 on a custom dataset.",
    link: "",
    techStack: "Python, Numpy"
  },
  {
    img: PomoHero,
    title: "PomoHero: A Pomodoro Timer",
    description: "PomoHero is a time-management software tool that allows users to add and complete tasks and take breaks. It has two background themes, is fully responsive to desktop and mobile devices, is highly accessible, and has keystoke access.",
    link: "https://pomo-hero.web.app",
    techStack: "UX Design, HTML/CSS, Vanilla JavaScript, Webcomponents, JUnit and Integration testing"
  },
  {
    img: Cache,
    title: "Custom Memory Allocator in C",
    description: "Implemented a custom memory allocator for fixed-size objects by placing them next to each other in memory aligned to a cache line to get spatial and temporal locality, and keeping track of references to freed memory to initialize new objects there instead of requesting more memory.",
    link: "",
    techStack: "C, Caches, Spatial and Temporal Locality, Compiler Optimizations"
  },
  {
    img: CS,
    title: "Computer Security Attacks",
    description: "In a controlled environment, caused buffer overflow attacks by writing beyond the bounds of an array and overwriting the return address, pointing to shell code and getting root access. Exploite side channels, SQL injection, XSS, CSRF, TCP spoofing, and length extension on the MD5 hash function.",
    link: "",
    techStack: "C, Cryptography, SQL, JavaScript, Reading the stack"
  },
  {
    img: Nachos,
    title: "Multithreading and Multiprocessing",
    description: "I implemented various aspects of NACHOS -- threading capabilities through synchronization using locks and condition variables, system calls like read, write, exec by mapping virtual to physical pages, and multiprocessing using a page table to keep track of each process's address space.",
    link: "",
    techStack: "Java, Synchronization, Memory Management"
  },
  {
    img: FileCompression,
    title: "File Compression",
    description: "I use a Huffman tree to generate encodings for each character in the given file and then used them to encode the entire file. I put a a header at the beginning of the compressed file to help regenerate the Huffman tree and decode each of the encodings in the compressed file to get back the original file.",
    link: "",
    techStack: "C++, Makefiles, Unit Testing"
  }
];
