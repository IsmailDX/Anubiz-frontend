"use client";
import Image from "next/image";
import ParticlesBackground from "@/components/Particles/ParticlesBackground";
import pattern from "@/public/images/pattern.png";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Home() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8).required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        values
      );
      console.log(
        `Registered a new User: ${response.data.user.name}`,
        response.data
      );
      setSuccess(true);
      setError(false);
      resetForm();
    } catch (error) {
      setError(true);
      setSuccess(false);
      console.error(error);
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
          <h1 className="pt-4 font-[Posterama-Regular] font-bold text-xl xsm:text-2xl 2xl:text-3xl absolute top-[3%] z-10">
            Register
          </h1>

          <div className="absolute inset-0">
            <div className="w-full h-[65%] 2xl:h-[70%] bg-gradient-to-b from-transparent to-white absolute inset-0 backdrop-blur-[2px]" />
            <Image
              width={500}
              height={500}
              alt="pattern"
              src={pattern}
              className="w-full object-contain"
            />
          </div>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col items-center w-full mt-[30%] px-[5%] 2xl:px-[10%] space-y-[3%]">
              <div className="relative w-full min-w-[200px] h-fit">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder={" "}
                  required
                  autoComplete=""
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#cca62e]"
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-[#cca62e] before:border-blue-gray-200 peer-focus:before:!border-[#cca62e] after:border-blue-gray-200 peer-focus:after:!border-[#cca62e]">
                  Name
                </label>
                <div className="pt-2 text-red-500 text-xs">
                  <ErrorMessage name="name" />
                </div>
              </div>
              <div className="relative w-full min-w-[200px] h-fit">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder={" "}
                  required
                  autoComplete=""
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-[#cca62e]"
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-[#cca62e] before:border-blue-gray-200 peer-focus:before:!border-[#cca62e] after:border-blue-gray-200 peer-focus:after:!border-[#cca62e]">
                  Email address
                </label>
                <div className="pt-2 text-red-500 text-xs">
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
                  autoComplete=""
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#cca62e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#cca62e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#cca62e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#cca62e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
                <div className="pt-2 text-red-500 text-xs">
                  <ErrorMessage name="password" />
                </div>
              </div>

              <div className="relative h-fit w-full min-w-[200px]">
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder=" "
                  required
                  autoComplete=""
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#cca62e] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#cca62e] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#cca62e] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#cca62e] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Confirm Password
                </label>
                <div className="pt-2 text-red-500 text-xs">
                  <ErrorMessage name="confirmPassword" />
                </div>
              </div>
              {error && (
                <div className="w-full bg-red-200 border-2 border-red-300 rounded-lg flex justify-center items-center gap-2 px-2">
                  <MdErrorOutline className="w-7 h-7" />
                  <p className="text-sm w-full">Email already taken.</p>
                </div>
              )}
              {success && (
                <div className="w-full bg-green-200 border-2 border-green-300 rounded-lg flex justify-center items-center gap-2 px-2">
                  <FaRegCircleCheck className="w-6 h-6" />
                  <p className="text-sm w-full">
                    Please check your email to verify your account.
                  </p>
                </div>
              )}
              <div className="pt-5 w-full flex flex-col items-center space-y-5 z-10">
                <button type="submit" className="w-full buttonStyles">
                  Register
                </button>
                <p className="pb-5">
                  Already have an account?
                  <span className="underline pl-2 cursor-pointer">
                    <Link href="/">Log in</Link>
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
