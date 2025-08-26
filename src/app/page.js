import BannerAlloggi from "@/components/BannerAlloggi";
import BannerCelebrazioni from "@/components/BannerCelebrazioni";
import BannerOspitalità from "@/components/BannerOspitalità";
import Description from "@/components/Description";
import IntroAlloggi from "@/components/IntroAlloggi";
import IntroOspitalità from "@/components/IntroOspitalità";
import LastSection from "@/components/LastSection";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-1000vh">
      <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-[100vh]">
        <BannerOspitalità /> <IntroOspitalità />
      </div>
      <div className="my-[100vh]">
        <Description />
      </div>
      <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-[300vh] mb-[100vh]">
        <div>
          <IntroAlloggi />
        </div>
        <div className="absolute md:right-0">
          <BannerAlloggi />
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-[300vh] mt-[400vh]">
        <div>
          <BannerCelebrazioni />
        </div>
        <div className="absolute md:right-0 md:w-[1000px] w-screen">
          <LastSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
