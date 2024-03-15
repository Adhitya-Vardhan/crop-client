import Layout from "../components/Layout.js";
import Benefits from "../components/Benefits.js";
import CallToAction from "../components/CallToAction.js";
import Explanation from "../components/Explanatoin.js";
import Intro from "../components/Intro.js";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <>
      <Layout>
        <Intro />
        <Explanation />
        <CallToAction />
        <Benefits />
      </Layout>
    </>
  );
}
