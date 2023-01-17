import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className={styles.project}>
      <img
        src={image}
        alt="porftoflio works"
        className={styles.project__image}
      />
      <h2 className={styles.project__title}>{title}</h2>
      <p className={styles.project__description}>{description}</p>
    </div>
  );
};

export default ProjectCard;
