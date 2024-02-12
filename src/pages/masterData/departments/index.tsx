import { Helmet } from "react-helmet-async";
import MainAreas from "../../../components/templates/masterData/areas/MainAreas";
import MainDepartments from "../../../components/templates/masterData/departments/MainDepartments";

type Departments_TP = {
  title: string;
};
function Departments({ title }: Departments_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainDepartments />
      </div>
    </>
  );
}

export default Departments;
