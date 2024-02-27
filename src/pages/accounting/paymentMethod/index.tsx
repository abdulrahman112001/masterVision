import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/accounting/paymentMethod/Main";

type PaymentMethod_TP = {
  title: string;
};
function PaymentMethod({ title }: PaymentMethod_TP) {
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

export default PaymentMethod;
