import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/accounting/custodians/Main";

type Custodians_TP = {
  title: string;
};
function Custodians({ title }: Custodians_TP) {
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

export default Custodians;
