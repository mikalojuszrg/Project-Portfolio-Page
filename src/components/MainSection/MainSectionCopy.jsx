import { BsArrowUpRight } from "react-icons/bs";
import styles from "./MainSection.module.scss";
import IntroductionCard from "../IntroductionCard/IntroductionCard";
import ImageCard from "../ImageCard/ImageCard";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { getProjects } from "../../API/ProjectsData";

const projects = getProjects();

const MainSection = (props) => {
  return (
    <main className={styles.container}>
      {props.renderIntroductionCard ? (
        <IntroductionCard
          className={`${styles.container__intro} ${styles.introductionCard}`}
        />
      ) : null}
      {props.renderImageCard ? (
        <ImageCard
          className={`${styles.container__image} ${styles.imageCard}`}
        />
      ) : null}
      {projects.map((product) => {
        return (
          <div key={product.id} className={styles.container__product}>
            <Button variant="circle">
              <Link to={`/projects/${product.id}`}>
                <BsArrowUpRight />
              </Link>
            </Button>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/projects/${product.id}`}>
              <img
                className={styles.productImage}
                src={product.picture1}
                alt="product"
              />
            </Link>
          </div>
        );
      })}
    </main>
  );
};

export default MainSection;
