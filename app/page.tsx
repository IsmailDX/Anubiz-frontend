"use client";
import Image from "next/image";
import ParticlesBackground from "../components/Particles/ParticlesBackground";
import pattern from "@/public/images/pattern.png";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import googleIcon from "../public/images/google-icon.png";

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8).required("password is required"),
  });

  const handleSubmit = async (
    values: Object,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/api/v1/login",
        values
      );
      console.log("Login successful", response.data);
      setErrorMessage(null);
      resetForm();
    } catch (error: any) {
      if (error.response.status === 403) {
        setErrorMessage("emailVerification");
        console.log("Forbidden: Please verify your email.");
      } else if (error.response.status === 401) {
        setErrorMessage("invalidCredentials");
        console.log("Unauthorized: Please log in to register.");
      } else {
        console.error(
          "An error occurred:",
          error.response?.data?.message || error.message
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <ParticlesBackground />
      <div className="h-[100dvh] w-full flex items-center justify-center select-none">
        <div
          className="w-full xsm:w-[320px] 2xl:w-[420px] bg-white text-black rounded-xl 
        overflow-hidden flex flex-col items-center relative mx-[5%] xsm:mx-0"
        >
          <div className="w-full flex flex-col items-center absolute top-[3%] z-10">
            <Image
              width={500}
              height={500}
              alt="logo"
              src={logo}
              className="w-[35%] object-contain"
            />
            <h1 className="pt-4 font-[Posterama-Regular] font-bold text-xl xsm:text-2xl 2xl:text-3xl">
              Welcome to Anubiz
            </h1>
          </div>
          <div className="w-full">
            <div className="w-full h-[50%] 2xl:h-[55%] bg-gradient-to-b from-transparent to-white absolute inset-0" />
            <Image
              width={500}
              height={500}
              alt="pattern"
              src={pattern}
              className="w-full object-contain"
            />
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form
              className="flex flex-col items-center w-full mt-[5%] px-[5%] 2xl:px-[10%] space-y-[1%]"
              aria-autocomplete="none"
              autoComplete="off"
            >
              <div className="relative w-full min-w-[200px] h-fit">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder={" "}
                  required
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#cca62e]"
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-[#cca62e] before:border-blue-gray-200 peer-focus:before:!border-[#cca62e] after:border-blue-gray-200 peer-focus:after:!border-[#cca62e]">
                  Email
                </label>
                <div className="pt-2 text-red-500 text-xs pb-3">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="relative h-fit w-full min-w-[200px]">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" "
                  required
                  autoComplete="new-password"
                  validate={(value: any) => {
                    if (/[';\\]/.test(value)) {
                      return "Password contains invalid characters";
                    }
                    return undefined;
                  }}
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#cca62e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#cca62e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#cca62e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#cca62e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
                <div className="pt-2 text-red-500 text-xs">
                  <ErrorMessage name="password" />
                </div>
                <a href="/forgotPass" target="_blank">
                  <p className="text-xs text-black/70 hover:text-black transition-all duration-100 ease-in-out w-fit cursor-pointer hover:underline">
                    Forgot password?
                  </p>
                </a>
              </div>

              {errorMessage === "emailVerification" && (
                <div className="w-full bg-red-200 border-2 border-red-300 rounded-lg flex justify-center items-center gap-2 px-2">
                  <MdErrorOutline className="w-7 h-7" />
                  <p className="text-sm w-full">
                    Kindly complete the email verification process by opening
                    your email inbox and confirming your account.
                  </p>
                </div>
              )}

              {errorMessage === "invalidCredentials" && (
                <div className="w-full bg-red-200 border-2 border-red-300 rounded-lg flex justify-center items-center gap-2 px-2">
                  <MdErrorOutline className="w-7 h-7" />
                  <p className="text-sm w-full">
                    Your credentials are invalid. Please verify your username
                    and password.
                  </p>
                </div>
              )}

              <div className="pt-5 w-full flex flex-col items-center space-y-1">
                <button type="submit" className="w-full buttonStyles">
                  Sign in
                </button>
                <p>or</p>
                <a
                  href="http://localhost:3000/auth/google"
                  className="w-full"
                  target="_blank"
                >
                  <div
                    className="w-full buttonStyles bg-white border-[1px] border-opacity-40 border-black 
                  flex justify-center items-center gap-2"
                  >
                    <Image
                      src={googleIcon}
                      alt={"google-icon"}
                      width={200}
                      height={200}
                      className="w-9 h-full object-contain"
                    />
                    <p>Continue with Google</p>
                  </div>
                </a>
                <p className="pb-5 pt-2">
                  Don’t have an account?
                  <span className="underline pl-2 cursor-pointer">
                    <Link href="/register">Sign up</Link>
                  </span>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
}
