import { Helmet } from "react-helmet-async";
import MainChartAccount from "../../../components/templates/accounting/chartAccount/MainChartAccount";


type ChartAccount_TP = {
  title: string;
};
function ChartAccount({ title }: ChartAccount_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainChartAccount />
      </div>
    </>
  );
}

export default ChartAccount;
