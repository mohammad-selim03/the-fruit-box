import AboutSection from "@/components/HomePageComponents/AboutSection";
import Banner from "@/components/HomePageComponents/Banner";
import FruitBoxSection from "@/components/HomePageComponents/FruitBoxSection";
import FruitsEnquiry from "@/components/HomePageComponents/FruitsEnquiry";
import HowToOrder from "@/components/HomePageComponents/HowToOrder";
import Offer from "@/components/HomePageComponents/Offer";
import WhySection from "@/components/HomePageComponents/WhySection";
import Loader from "@/components/ui/Shared/Loader";
import { useGetApi } from "@/hooks/API/useGetApi";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { data, isLoading } = useGetApi("system-setting", true);
  if (data) {
    localStorage.setItem("system-setting", JSON.stringify(data));
  }
  return isLoading ? (
    <div className="flex items-center justify-center h-screen">
      <Loader size={100} />
    </div>
  ) : (
    <div>
      <Helmet>
        <title>The Fruit Box</title> 
      </Helmet>
      <Banner />
      <FruitBoxSection />
      <WhySection />
      <HowToOrder />
      <AboutSection />
      <FruitsEnquiry />
      <Offer />
    </div>
  );
};

export default Home;
