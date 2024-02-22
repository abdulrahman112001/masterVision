import { Helmet } from "react-helmet-async";
import MainActivityLogs from "../../../components/templates/masterData/activityLogs/MainActivityLogs";

type ActivityLogs_TP = {
  title: string;
};
function ActivityLogs({ title }: ActivityLogs_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainActivityLogs />
      </div>
    </>
  );
}

export default ActivityLogs;
