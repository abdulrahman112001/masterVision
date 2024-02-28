import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/accounting/taxes/Main";

type Taxes_TP = {
  title: string;
};
function Taxes({ title }: Taxes_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main />
      </div>
    </>
  );
}

export default Taxes;
