import sourceryImage1 from "../assets/Academy1.png";
import sourceryImage2 from "../assets/Academy2.png";
import sourceryImage3 from "../assets/Academy3.png";
import quizGame1 from "../assets/QuizGame1.png";
import quizGame2 from "../assets/QuizGame2.png";
import quizGame3 from "../assets/QuizGame3.png";
import membership1 from "../assets/Membership1.png";
import memeGenerator1 from "../assets/MemeGenerator.png";

const projects = [
  {
    id: 1,
    name: "Sourcery Academy Website",
    github: "www.github.com",
    description: "Website made with my team during Devbridge Sourcery Academy",
    picture1: sourceryImage1,
    picture2: sourceryImage2,
    picture3: sourceryImage3,
  },
  {
    id: 2,
    name: "Quiz Game Website",
    github: "www.github.com",
    description: "Quiz game made for the codeAcademy JavaScript practical exam",
    picture1: quizGame1,
    picture2: quizGame2,
    picture3: quizGame3,
  },
  {
    id: 3,
    name: "Membership Management",
    github: "www.github.com",
    description:
      "Mini web application made for the codeAcademy Node,js practical exam",
    picture1: membership1,
    picture2: "",
    picture3: "",
  },
  {
    id: 4,
    name: "Meme Generator",
    github: "www.github.com",
    description:
      "Simple React web app to generate Memes with fech and form inputs",
    picture1: memeGenerator1,
    picture2: "",
    picture3: "",
  },
];

export const getProjects = () => {
  return projects;
};

export const getProject = (id) => {
  return projects.find((car) => car.id === id);
};
