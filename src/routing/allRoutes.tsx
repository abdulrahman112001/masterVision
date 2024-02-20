import { t } from "i18next";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { ErrorPage } from "./ErrorPage";
import { Root } from "./Root";
import Countries from "../pages/masterData/countries";
import Cities from "../pages/masterData/cities";
import Currencies from "../pages/masterData/currencies";
import Areas from "../pages/masterData/areas";
import Departments from "../pages/masterData/departments";
import Employees from "../pages/masterData/employees";
import Clients from "../pages/masterData/clients";
import Branches from "../pages/masterData/branches";
import Admins from "../pages/masterData/admins";
import Roles from "../pages/masterData/Role/Roles";

export const AllRoutesProvider = () => {
  // tail
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={<Home title={t("home")} />} />
        {/* master Data */}
        <Route
          path="/masterData/countries"
          element={<Countries title={t("Countries")} />}
        />
        <Route
          path="/masterData/cities"
          element={<Cities title={t("Cities")} />}
        />
        <Route
          path="/masterData/areas"
          element={<Areas title={t("Areas")} />}
        />
        <Route
          path="/masterData/currencies"
          element={<Currencies title={t("Currencies")} />}
        />
        <Route
          path="/masterData/departments"
          element={<Departments title={t("Departments")} />}
        />
        <Route
          path="/masterData/employees"
          element={<Employees title={t("Employees")} />}
        />
        <Route
          path="/masterData/clients"
          element={<Clients title={t("Clients")} />}
        />
        <Route
          path="/masterData/branches"
          element={<Branches title={t("Branches")} />}
        />
          <Route
          path="/masterData/roles"
          element={<Roles title={t("Roles")} />}
        />
        <Route
          path="/masterData/admins"
          element={<Admins title={t("Admins")} />}
        />
      </Route>

      <Route
        errorElement={<ErrorPage />}
        path="/login"
        element={<Login title={t("login")} />}
      />
    </Routes>
  );
};
