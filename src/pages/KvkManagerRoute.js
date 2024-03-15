import Layout from "../components/Layout";
import AddFarmer from "../components/AddFarmer";
import AddScientist from "../components/AddScientist";

export default function KvkManagerRoute() {
  return (
    <>
      <Layout>
        <h1>thsi is kvk manager page</h1>;
        <AddFarmer />
        <AddScientist />
      </Layout>
    </>
  );
}
