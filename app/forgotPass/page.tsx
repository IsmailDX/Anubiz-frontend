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

const ForgotPass = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    console.log(values);

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/forgotPassword",
        values
      );
      console.log(`Sent an email to: ${values.email}`);

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
          <div className="w-full absolute top-[3%] z-10 flex flex-col items-center justify-center">
            <h1 className="pt-4 font-[Posterama-Regular] font-bold text-xl xsm:text-2xl 2xl:text-3xl">
              Forgot Password?
            </h1>
            <h3 className="pt-[3%]">What's your email?</h3>
          </div>
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute inset-0 backdrop-blur-[2px]" />
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
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col items-center w-full mt-[30%] px-[5%] 2xl:px-[10%]  pt-5">
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
                <div className="py-2 text-red-500 text-xs">
                  <ErrorMessage name="email" />
                </div>
              </div>

              {error && (
                <div className="w-full bg-red-200 border-2 border-red-300 rounded-lg flex justify-center items-center gap-2 p-2 z-10">
                  <MdErrorOutline className="w-7 h-7" />
                  <p className="text-sm w-full">
                    The email provided does not exist in our records.
                  </p>
                </div>
              )}
              {success && (
                <div className="w-full bg-green-200 border-2 border-green-300 rounded-lg flex justify-center items-center gap-2 p-2 z-10">
                  <FaRegCircleCheck className="w-6 h-6" />
                  <p className="text-sm w-full">
                    A password reset email has been sent.
                  </p>
                </div>
              )}

              <div className="pt-5 w-full flex flex-col items-center space-y-5 z-10">
                <button type="submit" className="w-full buttonStyles">
                  Search
                </button>
                <div className="pb-5 text-black transition-all duration-100 ease-in-out w-fit cursor-pointer flex gap-2">
                  <Link href="/" className="hover:underline">
                    Sign in
                  </Link>
                  <p>or</p>
                  <Link href="/register" className="hover:underline">
                    Sign up
                  </Link>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default ForgotPass;
