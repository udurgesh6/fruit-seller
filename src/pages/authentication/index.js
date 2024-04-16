/* eslint-disable react-hooks/rules-of-hooks */
// import { Google } from "@/constants/allSvgs";
import React, { useState } from "react";
import useLoginSubmit from "@/hooks/useLoginSubmit";
import InputArea from "@/components/form/InputArea";
import Error from "@/components/form/Error";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import BasicLoading from "@/components/Loading/BasicLoading";

const index = () => {
  const [actionType, setActionType] = useState("login");

  const { handleSubmit, submitHandler, register, errors, loading } =
    useLoginSubmit(actionType);

  const changeActionType = () => {
    if (actionType === "login") {
      setActionType("signup");
    } else {
      setActionType("login");
    }
  };

  return (
    <div className="pt-14 px-4 md:px-20 lg:px-48 text-[#770006]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="col-span-2 md:col-span-1 border-2 border-[#770006] p-5 rounded"
        >
          <h1 className="font-semibold text-xl text-center">
            {actionType === "login" ? "Login In" : "Create Account"}
          </h1>
          <p className="text-center my-4">
            {actionType === "login"
              ? "Please login below with your account details"
              : "Please register below with your account details"}
          </p>
          {actionType === "signup" && (
            <div className="form-group">
              <InputArea
                register={register}
                name="name"
                type="text"
                placeholder="Name"
                Icon={FiUser}
                className="p-2 border border-[#770006] w-full"
              />
              <Error errorName={errors.name} />
            </div>
          )}
          <div className="form-group">
            <InputArea
              register={register}
              name={
                actionType === "login"
                  ? "registerEmail"
                  : actionType === "signup"
                  ? "email"
                  : "verifyEmail"
              }
              type="email"
              placeholder={
                actionType === "forgot" ? "Your Registered Email" : "Email"
              }
              Icon={FiMail}
              className="p-2 border border-[#770006] w-full mt-2"
            />
            <Error errorName={errors.email} />
          </div>
          {actionType !== "forgot" && (
            <div className="form-group">
              <InputArea
                register={register}
                name="password"
                type="password"
                placeholder="Password"
                Icon={FiLock}
                className="p-2 border border-[#770006] w-full mt-2"
              />
              <Error errorName={errors.password} />
            </div>
          )}
          {actionType === "login" && (
            <p
              onClick={() => setActionType("forgot")}
              className="text-sm font-medium mt-2 cursor-pointer"
            >
              Forgot your password?
            </p>
          )}
          <div className="px-4 md:px-8 lg:px-12 w-full text-sm md:text-base">
            <button
              disabled={loading}
              type="submit"
              className="bg-[#770006] text-sm md:text-base text-uppercase text-white p-3 rounded w-full my-4"
            >
              {loading ? (
                <BasicLoading />
              ) : actionType === "login" ? (
                "SIGN IN"
              ) : actionType === "signup" ? (
                "CREATE"
              ) : (
                "RECOVER PASSWORD"
              )}
            </button>
          </div>
          {/* <div className="flex flex-row items-center w-full justify-between">
            <hr className="border border-[#770006] w-[45%]"></hr>
            <p>Or</p>
            <hr className="border border-[#770006] w-[45%]"></hr>
          </div>
          <div className="px-4 md:px-8 lg:px-12 w-full  text-sm md:text-base">
            <button className="flex flex-row items-center justify-center bg-[#770006] text-uppercase text-white p-3 rounded w-full my-4">
              <Google />
              <p className="ml-3">
                {actionType === "login"
                  ? "Sign in with Google"
                  : "Create with Google"}
              </p>
            </button>
          </div> */}
        </form>
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center">
          <h2 className="text-base md:text-lg mb-4">
            {actionType === "login"
              ? "Don't have an account?"
              : "Already an account holder?"}
          </h2>
          <button
            onClick={changeActionType}
            className="text-sm md:text-base p-2 border-2 border-[#770006] text-center rounded"
          >
            {actionType === "login" ? "CREATE AN ACCOUNT" : "LOG IN"}
          </button>
          <p className="text-sm text-[#770006] mt-4 font-semibold">
            Terms & Conditions
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Your privacy and security are important to us. For more information
            on how we use your data read our{" "}
            <span className="text-[#770006]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
