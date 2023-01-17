import Footer from "../../components/Footer/Footer";
import MainSection from "../../components/MainSection/MainSection";
import TopBar from "../../components/TopBar/TopBar";

const WorksPage = ({ renderIntroductionCard, renderImageCard }) => {
  return (
    <div>
      <TopBar />
      <MainSection renderIntroductionCard={false} renderImageCard={false} />
      <Footer />
    </div>
  );
};

export default WorksPage;
