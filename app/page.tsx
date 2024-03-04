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

export default function Home() {
  const [error, setError] = useState(false);

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
        "http://localhost:3000/api/v1/auth/login",
        values
      );
      console.log("Login successful", response.data);
      setError(false);
      resetForm();
    } catch (error) {
      console.error("Login failed", error);
      setError(true);
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
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#cca62e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#cca62e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#cca62e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#cca62e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
                <div className="pt-2 text-red-500 text-xs">
                  <ErrorMessage name="password" />
                </div>
              </div>

              {error && <p>error</p>}

              <div className="pt-5 w-full flex flex-col items-center space-y-5">
                <button type="submit" className="w-full buttonStyles">
                  Sign in
                </button>
                <p className="pb-5">
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
