import { Helmet } from "react-helmet-async";
import MainAreas from "../../../components/templates/masterData/areas/MainAreas";
import MainCoastCenter from "../../../components/templates/accounting/coastCenter/MainCoastCenter";

type CoastCenter_TP = {
  title: string;
};
function CoastCenter({ title }: CoastCenter_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainCoastCenter />
      </div>
    </>
  );
}

export default CoastCenter;
