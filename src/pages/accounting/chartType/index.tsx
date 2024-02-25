import { Helmet } from "react-helmet-async";
import MainChartType from "../../../components/templates/accounting/chartType/MainChartType";

type ChartType_TP = {
  title: string;
};
function ChartType({ title }: ChartType_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainChartType />
      </div>
    </>
  );
}

export default ChartType;
