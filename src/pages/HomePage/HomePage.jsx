import Footer from "../../components/Footer/Footer";
import MainSection from "../../components/MainSection/MainSection";
import TopBar from "../../components/TopBar/TopBar";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <MainSection renderIntroductionCard={true} renderImageCard={true} />
      <Footer />
    </>
  );
};

export default HomePage;
