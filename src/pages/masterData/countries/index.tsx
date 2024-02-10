import React from "react";
import { Helmet } from "react-helmet-async";
import MainCountries from "../../../components/templates/masterData/countries/MainCountries";

type Countries_TP = {
  title: string;
};
function Countries({ title }: Countries_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <MainCountries />
      </div>
    </>
  );
}

export default Countries;
