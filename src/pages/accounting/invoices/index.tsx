import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/accounting/invoices/Main";

type Invoices_TP = {
  title: string;
};
function Invoices({ title }: Invoices_TP) {
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

export default Invoices;
