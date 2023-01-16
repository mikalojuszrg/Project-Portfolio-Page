import styles from "./ImageCard.module.scss";
import profile from "./Images/profile.jpeg";

const ImageCard = ({ className }) => {
  return <img src={profile} alt="Profile" className={className} />;
};

export default ImageCard;
