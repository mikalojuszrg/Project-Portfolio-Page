import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className={styles.project}>
      <h2 className={styles.project__title}>{title}</h2>
      <p className={styles.project__description}>{description}</p>
      <img
        src={image}
        alt="porftoflio works"
        className={styles.project__image}
      />
    </div>
  );
};

export default ProjectCard;
