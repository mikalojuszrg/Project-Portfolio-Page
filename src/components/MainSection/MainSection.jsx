import styles from "./MainSection.module.scss";
import IntroductionCard from "../IntroductionCard/IntroductionCard";
import ImageCard from "../ImageCard/ImageCard";

const productInfo = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Quiz game app",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    id: 99999,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1570030990547-f6b13f3062ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Sourcery academy app",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    id: 988888,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1570030990547-f6b13f3062ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Meme generator",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    id: 19239123,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Sourcery academy app",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    id: 831823812,
  },
];

const MainSection = () => {
  return (
    <main className={styles.container}>
      <IntroductionCard
        className={`${styles.container__intro} ${styles.introductionCard}`}
      />
      <ImageCard className={`${styles.container__image} ${styles.imageCard}`} />
      {productInfo.map((product) => {
        return (
          <div
            key={product.id}
            // className={`${styles.container__product} product-${product.id}`}
            className={styles.container__product}
          >
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img
              className={styles.productImage}
              src={product.imageUrl}
              alt="product"
            />
          </div>
        );
      })}
    </main>
  );
};

export default MainSection;
