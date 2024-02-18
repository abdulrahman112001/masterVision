import { Helmet } from "react-helmet-async";
import MainEmployees from "../../../components/templates/masterData/employees/MainEmployees";

type Employees_TP = {
  title: string;
};
function Employees({ title }: Employees_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainEmployees />
      </div>
    </>
  );
}

export default Employees;
