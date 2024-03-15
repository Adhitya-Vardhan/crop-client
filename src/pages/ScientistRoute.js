import Layout from "../components/Layout";
import ScientistDisplayImages from "../components/ScientistDisplayImages";
import GetAiSolution from "../components/GetAiSolution";
import ReviewSolution from "../components/ReviewSolution";
import VerifySolution from "../components/VerifySolution";

export default function ScientistRoute() {
  return (
    <>
      <Layout>
        <h1>thsi is scientist page</h1>;
        <ScientistDisplayImages />
        <GetAiSolution />
        <ReviewSolution />
        <VerifySolution />
      </Layout>
    </>
  );
}
