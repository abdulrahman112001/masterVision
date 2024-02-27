import { Helmet } from "react-helmet-async";
import MainEntities from "../../../components/templates/accounting/entities/MainEntities";

type Entities_TP = {
  title: string;
};
function Entities({ title }: Entities_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainEntities />
      </div>
    </>
  );
}

export default Entities;
