import React from "react";
import RowPost from "./RowPost/RowPost";
import { action, originals } from "./urls";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
    </div>
  );
}

export default Home;
