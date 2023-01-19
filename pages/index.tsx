import MetaHeader from "Common/MetaHeader";
import type { NextPage } from "next";
import HomePage from "pages/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <HomePage />
    </>
  );
};

export default Home;
