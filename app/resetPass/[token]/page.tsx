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
import { useParams } from "next/navigation";

export default function ResetPass() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const params = useParams<{ token: any }>();

  const validationSchema = Yup.object().shape({
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
      const response = await axios.put(
        `http://localhost:3000/auth/resetPassword/${params.token}`,
        { newPassword: values.password }
      );
      console.log("Password reset successful:", response.data);
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
            Reset Password
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
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col items-center w-full mt-[30%] px-[5%] 2xl:px-[10%] space-y-[3%]">
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
                <div className="w-full bg-red-200 border-2 border-red-300 rounded-lg flex justify-center items-center gap-2 p-2 z-10">
                  <MdErrorOutline className="w-7 h-7" />
                  <p className="text-sm w-full">Password did not reset.</p>
                </div>
              )}
              {success && (
                <div className="w-full bg-green-200 border-2 border-green-300 rounded-lg flex justify-center items-center gap-2 p-2 z-10">
                  <FaRegCircleCheck className="w-6 h-6" />
                  <p className="text-sm w-full">Password reset successful.</p>
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
