import { Helmet } from "react-helmet-async";
import MainCities from "../../../components/templates/masterData/cities/MainCities";

type Countries_TP = {
  title: string;
};
function Cities({ title }: Countries_TP) {
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

export default Cities;
