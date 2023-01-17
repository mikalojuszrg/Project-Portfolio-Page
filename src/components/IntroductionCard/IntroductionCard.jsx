import styles from "./IntroductionCard.module.scss";
import { buttons } from "../../consts/buttons";

import Button from "../Button/Button";

const IntroductionCard = () => {
  return (
    <div className={styles.card}>
      <h1>Hey, I'm Mikalojus, a frontend developer</h1>
      <p>I care about this and that.</p>
      <div className={styles.card__buttons}>
        {buttons.map((button) => (
          <Button key={button.id} variant={button.variant}>
            {button.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default IntroductionCard;
