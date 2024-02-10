import { t } from "i18next";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { ErrorPage } from "./ErrorPage";
import { Root } from "./Root";
import Countries from "../pages/masterData/countries";
import Cities from "../pages/masterData/cities";

export const AllRoutesProvider = () => {
  // tail
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={<Home title={t("home")} />} />
        <Route path="/masterData/countries" element={<Countries title={t("Countries")} />} />
        <Route path="/masterData/cities" element={<Cities title={t("Cities")} />} />


      </Route>

      <Route
        errorElement={<ErrorPage />}
        path="/login"
        element={<Login title={t("login")} />}
      />
    </Routes>
  );
};
