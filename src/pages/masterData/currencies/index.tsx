import { Helmet } from "react-helmet-async";
import MainCountries from "../../../components/templates/masterData/countries/MainCountries";
import MainCurrency from "../../../components/templates/masterData/currencies/MainCurrency";

type Currencies_TP = {
  title: string;
};
function Currencies({ title }: Currencies_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainCurrency />
      </div>
    </>
  );
}

export default Currencies;
