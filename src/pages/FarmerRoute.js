import Layout from "../components/Layout";
import ImageUpload from "../components/ImageUpload";
import FarmerDisplayImages from "../components/FarmerDisplayImages";
import FarmerFinalOutput from "../components/FarmerFinalOutput";

export default function FarmerRoute() {
  return (
    <>
      <Layout>
        <h1>thsi is farmer page</h1>;
        <ImageUpload />
        <FarmerDisplayImages />
        <FarmerFinalOutput />
      </Layout>
    </>
  );
}
