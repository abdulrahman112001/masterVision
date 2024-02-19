import { Helmet } from "react-helmet-async";
import MainCities from "../../../components/templates/masterData/clients/MainCities";

type Countries_TP = {
  title: string;
};
function Clients({ title }: Countries_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainCities />
      </div>
    </>
  );
}

export default Clients;
