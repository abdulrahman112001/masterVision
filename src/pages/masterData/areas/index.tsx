import { Helmet } from "react-helmet-async";
import MainAreas from "../../../components/templates/masterData/areas/MainAreas";

type Areas_TP = {
  title: string;
};
function Areas({ title }: Areas_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainAreas />
      </div>
    </>
  );
}

export default Areas;
