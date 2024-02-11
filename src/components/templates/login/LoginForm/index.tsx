/////////// IMPORTS
///

import { Form, Formik } from "formik";
import { t } from "i18next";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "../../../../context/auth-and-perm/AuthProvider";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { Button } from "../../../atoms/buttons/Button";
import logo from "../../../../assets/global/logo.jpg";

import LoginMainData from "./LoginMainData";
import { requiredTranslation } from "../../../../utils/helpers";

const loginSchema = Yup.object().shape({
  email: Yup.string().trim().required(requiredTranslation),
  password: Yup.string().trim().required(requiredTranslation),
});

export const LoginForm = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const { isLoading, mutate, data } = useMutate({
    endpoint: "auth/login",
    formData: true,
    mutationKey: ["login"],
    onSuccess: (data: any) => {
      console.log("🚀 ~ LoginForm ~ data:", data.data?.data);
      const token = data.data?.data?.token;
      Cookies.set("token", token, { expires: 7 });
      notify("success", "_", `${data?.data?.message}`);
      login(data.data?.data);
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
      notify("error", `${err?.response?.data?.message}`);
    },
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <div className="login-page flex flex-col items-center justify-center h-screen gap-3">
        <div className="cust-padding">
          <div className="flex justify-center w-full">
            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 login-box relative">
              <div className="content">
                <div className="logo-in-top">
                  <img
                    alt="Logo"
                    src={logo}
                    style={{ height: "120px", width: "120px" }}
                    className="!rounded-full"
                  />
                </div>
                <p className="text-base">{t("Welcome to Master Vision")}</p>
                <Formik
                  initialValues={initialValues}
                  validationSchema={loginSchema}
                  onSubmit={(values) => {
                    mutate(values);
                  }}
                >
                  <Form>
                    <LoginMainData />
                    <div className="text-center">
                      <Button
                        className="mt-3 w-full sign_in_submit_login "
                        type="submit"
                        variant="primary"
                        loading={isLoading}
                      >
                        {t("Login")}
                      </Button>

                      <div className="flex justify-end">
                        <a
                          className="text-dark flex flex-row items-center text-[12px]"
                          target="_blank"
                          href="https://technoraft.com/"
                        >
                          {t("Developed by")}
                          <img src={logo} alt="" className="w-[50px]" />© 2024
                        </a>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
