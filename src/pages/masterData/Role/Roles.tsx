import { Helmet } from "react-helmet-async";
import MainRoles from "../../../components/templates/masterData/Roles/MainRoles";

type Countries_TP = {
  title: string;
};
function Roles({ title }: Countries_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainRoles />
      </div>
    </>
  );
}

export default Roles;
