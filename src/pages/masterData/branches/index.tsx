import React from "react";
import { Helmet } from "react-helmet-async";
import MainBranches from "../../../components/templates/masterData/branches/MainBranches";
type Branches_TP = {
  title: string;
};
function Branches({ title }: Branches_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainBranches />
      </div>
    </>
  );
}

export default Branches;
