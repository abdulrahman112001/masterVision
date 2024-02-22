import { Helmet } from "react-helmet-async";
import MainSettings from "../../../components/templates/masterData/settings/MainSettings";

type CSettings_TP = {
  title: string;
};
function Settings({ title }: CSettings_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainSettings />
      </div>
    </>
  );
}

export default Settings;
