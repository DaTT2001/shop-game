import React from "react";
import home from './Home.module.css'
import SliderMain from "../../components/SliderMain/SliderMain";
import HomeProducts from "../../components/HomeProducts/HomeProducts";

const Home = () => {
  return (
    <>
     <SliderMain/>
     <HomeProducts imglink="images/rcm-banner.svg" areaTitle="Recommended for you" productIdxStart={0} productIdxEnd={8}/>
     <HomeProducts imglink="images/hot-game-bannner.svg" areaTitle="Hot Games" productIdxStart={8} productIdxEnd={16}/>
    </>
  );
};

export default Home;
