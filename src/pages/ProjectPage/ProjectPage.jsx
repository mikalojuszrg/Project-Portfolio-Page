import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./ProjectPage.module.scss";
import { useParams } from "react-router-dom";
import { getProject } from "../../API/ProjectsData.js";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/TopBar/TopBar";
import Button from "../../components/Button/Button";
import { useState } from "react";

const ProjectPage = () => {
  const { id } = useParams();
  const project = getProject(Number(id));

  const [counter, setCounter] = useState(0);
  const [image, setImage] = useState(project.picture1);

  const handleNextImage = () => {
    setCounter((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount > 2) {
        setCounter(0);
        setImage(project["picture1"]);
      } else {
        setImage(project["picture" + (newCount + 1)]);
      }
      return newCount;
    });
  };

  const handleBackImage = () => {
    setCounter((prevCount) => {
      let newCount = prevCount - 1;
      if (newCount < 0) {
        setCounter(2);
        setImage(project["picture3"]);
      } else {
        setImage(project["picture" + (newCount + 1)]);
      }
      return newCount;
    });
  };

  return (
    <div className={styles.project}>
      <TopBar />
      <section className={styles.project__details}>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <a href={project.github}>Github</a>
      </section>
      <section className={styles.project__images}>
        {/* <div> */}
        <Button variant="circle" onClick={handleBackImage}>
          <FiArrowLeft />
        </Button>
        <img src={image} alt="project" />
        <Button variant="circle" onClick={handleNextImage}>
          <FiArrowRight />
        </Button>
        {/* </div> */}
      </section>
      <Footer />
    </div>
  );
};

export default ProjectPage;
