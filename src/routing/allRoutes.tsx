import { t } from "i18next";
import { Route, Routes } from "react-router-dom";
import ChartAccount from "../pages/accounting/chartAcount";
import ChartType from "../pages/accounting/chartType";
import CoastCenter from "../pages/accounting/coastCenter";
import Custodians from "../pages/accounting/custodians";
import Entities from "../pages/accounting/entities";
import Invoices from "../pages/accounting/invoices";
import PaymentMethod from "../pages/accounting/paymentMethod";
import Safes from "../pages/accounting/safes";
import Taxes from "../pages/accounting/taxes";
import Transactions from "../pages/accounting/transactions";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import Roles from "../pages/masterData/Role/Roles";
import ActivityLogs from "../pages/masterData/activityLogs";
import Admins from "../pages/masterData/admins";
import Areas from "../pages/masterData/areas";
import Branches from "../pages/masterData/branches";
import Cities from "../pages/masterData/cities";
import Clients from "../pages/masterData/clients";
import Countries from "../pages/masterData/countries";
import Currencies from "../pages/masterData/currencies";
import Departments from "../pages/masterData/departments";
import Employees from "../pages/masterData/employees";
import Settings from "../pages/masterData/settings";
import Suppliers from "../pages/masterData/suppliers";
import { ErrorPage } from "./ErrorPage";
import { Root } from "./Root";

export const AllRoutesProvider = () => {
  // tail
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={<Home title={t("home")} />} />
        {/* master Data */}
        <Route
          path="/masterData/activity-logs"
          element={<ActivityLogs title={t("Activity Logs")} />}
        />
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
        <Route
          path="/masterData/supplier"
          element={<Suppliers title={t("Suppliers")} />}
        />
        <Route
          path="/masterData/settings"
          element={<Settings title={t("Settings")} />}
        />
        {/* accounting */}
        <Route
          path="/account/coast-center"
          element={<CoastCenter title={t("Coast Center")} />}
        />
        <Route
          path="/account/chart-type"
          element={<ChartType title={t("chart type")} />}
        />
        <Route
          path="/account/chart-account"
          element={<ChartAccount title={t("chart account")} />}
        />
        <Route
          path="/account/entities"
          element={<Entities title={t("entities")} />}
        />
        <Route
          path="/account/payment-method"
          element={<PaymentMethod title={t("Payment Method")} />}
        />
        <Route path="/account/safes" element={<Safes title={t("Safes")} />} />
        <Route
          path="/account/custodians"
          element={<Custodians title={t("custodians")} />}
        />
         <Route
          path="/account/taxes"
          element={<Taxes title={t("taxes")} />}
        />
         <Route
          path="/account/invoices"
          element={<Invoices title={t("Invoices")} />}
        />
         <Route
          path="/account/transactions"
          element={<Transactions title={t("Transactions")} />}
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
