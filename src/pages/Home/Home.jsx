import CommunityTradeIdeas from "../../components/CommunityTradeIdeas/CommunityTradeIdeas";
import Feedback from "../../components/Feedback/Feedback";
import LatestNews from "../../components/LatestNews/LatestNews";
import LearnAndCalendarSection from "../../components/LearnAndCalendarSection/LearnAndCalendarSection";
import MarketData from "../../components/MarketData/MarketData";
import ShortInfoAboutCrypto from "../../components/ShortInfoAboutCrypto/ShortInfoAboutCrypto";

const Home = () => {
  return (
    <>
      <ShortInfoAboutCrypto />
      <LatestNews />
      <LearnAndCalendarSection />
      <MarketData />
      <CommunityTradeIdeas />
      <Feedback />
    </>
  );
};
export default Home;
