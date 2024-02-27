import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/accounting/safes/Main";

type Safes_TP = {
  title: string;
};
function Safes({ title }: Safes_TP) {
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

export default Safes;
