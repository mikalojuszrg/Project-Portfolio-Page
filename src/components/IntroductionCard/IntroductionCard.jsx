import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

import Button from "../Button/Button";

const buttons = [
  {
    variant: "standard",
    title: "Contact me",
    id: 1312831823,
  },
  {
    variant: "circle",
    title: <FaFacebook />,
    id: 4848484,
  },
  {
    variant: "circle",
    title: <FaLinkedin />,
    id: 333,
  },
  {
    variant: "circle",
    title: <FaInstagram />,
    id: 93123123,
  },
  {
    variant: "circle",
    title: <FaTwitter />,
    id: 83812312,
  },
];

const IntroductionCard = ({ className }) => {
  return (
    <div className={className}>
      <h1>Hey, I'm Mikalojus, a frontend developer</h1>
      <p>I care about this and that.</p>
      <div>
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
