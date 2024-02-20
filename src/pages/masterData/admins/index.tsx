import { Helmet } from "react-helmet-async";
import MainAdmins from "../../../components/templates/masterData/admins/MainAdmins";

type Countries_TP = {
  title: string;
};
function Admins({ title }: Countries_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainAdmins />
      </div>
    </>
  );
}

export default Admins;
