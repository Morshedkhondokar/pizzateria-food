import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import Delivery from "../components/home/Delivery";
import MenuHome from "../components/home/MenuHome";

const Home = () => {
  return (
    <div>
        <HomeHeader/>
        <Delivery/>
        <MenuHome/>
    </div>
  );
};

export default Home;
