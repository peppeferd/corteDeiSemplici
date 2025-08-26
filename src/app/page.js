import BannerOspitalità from "@/components/BannerOspitalità";
import Description from "@/components/Description";
import IntroOspitalità from "@/components/IntroOspitalità";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-1000vh">
      <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-[100vh] bg-linear-to-r from-amber-300 to-amber-50">
        <BannerOspitalità /> <IntroOspitalità />
      </div>
      <div className="my-[150vh]">
        <Description />
      </div>
    </div>
  );
};

export default Home;
