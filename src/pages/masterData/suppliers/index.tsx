import { Helmet } from "react-helmet-async";
import MainSupplier from "../../../components/templates/masterData/suppliers/MainSupplier";

type Countries_TP = {
  title: string;
};
function Suppliers({ title }: Countries_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainSupplier />
      </div>
    </>
  );
}

export default Suppliers;
