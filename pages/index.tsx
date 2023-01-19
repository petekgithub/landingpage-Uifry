import type { NextPage } from "next";
import MetaHeader from "src/Common/MetaHeader";
import HomePage from "src/pages/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <HomePage />
    </>
  );
};

export default Home;
