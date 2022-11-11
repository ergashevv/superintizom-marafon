import type { NextPage } from "next";
import Image from "next/image";
import Banner from "../components/banner";
import Header from "../components/header";
import PersonImage from "../public/images/person.png";
const Home: NextPage = () => {
  return (
    <div className="home">
      <div
        style={{
          // display: "flex",
          paddingTop: "10%",
        }}
        className="container home-child"
      >
        <div className="home-inner">
          <Header />
          <Banner />
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Home;
