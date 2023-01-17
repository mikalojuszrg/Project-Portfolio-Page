import styles from "./MainSection.module.scss";
import IntroductionCard from "../IntroductionCard/IntroductionCard";
import ImageCard from "../ImageCard/ImageCard";
import { getProjects } from "../../API/ProjectsData";
import ProjectCard from "../ProjectCard/ProjectCard";

const projects = getProjects();

const MainSection = (props) => {
  return (
    <main className={styles.container}>
      <div className={styles.container__info}>
        {props.renderIntroductionCard ? <IntroductionCard /> : null}
        {props.renderImageCard ? (
          <ImageCard
            className={`${styles.container__image} ${styles.imageCard}`}
          />
        ) : null}
      </div>
      <div className={styles.container__products}>
        {projects.map((product) => {
          return <ProjectCard {...product} />;
        })}
      </div>
    </main>
  );
};

export default MainSection;
