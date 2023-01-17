import { BsArrowUpRight } from "react-icons/bs";
import Button from "../Button/Button";
import styles from "./ProjectCard.module.scss";
import { Link } from "react-router-dom";

const ProjectCard = ({ name, description, picture1, id }) => {
  return (
    <div className={styles.project}>
      <h2 className={styles.project__title}>{name}</h2>
      <p className={styles.project__description}>{description}</p>
      <img
        src={picture1}
        alt="porftoflio work"
        className={styles.project__image}
      />
      <Link to={`/projects/${id}`}>
        <Button variant="circle">
          <BsArrowUpRight />
        </Button>
      </Link>
    </div>
  );
};

export default ProjectCard;
