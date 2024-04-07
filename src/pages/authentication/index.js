/* eslint-disable react-hooks/rules-of-hooks */
import { Google } from "@/constants/allSvgs";
import React, { useState } from "react";

const index = () => {
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [actionType, setActionType] = useState("signup");
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
        <div className="col-span-2 md:col-span-1 border-2 border-[#770006] p-5 rounded">
          <h1 className="font-semibold text-xl text-center">
            {actionType === "login" ? "Login In" : "Create Account"}
          </h1>
          <p className="text-center my-4">
            {actionType === "login"
              ? "Please login below with your account details"
              : "Please register below with your account details"}
          </p>
          {actionType === "signup" && (
            <div className="flex flex-row items-center mb-4">
              <input
                className="p-2 border border-[#770006] w-full mr-2"
                placeholder="First name"
                value={userDetail.firstName}
                onChange={(e) =>
                  setUserDetail({ ...userDetail, firstName: e.target.value })
                }
              />
              <input
                className="p-2 border border-[#770006] w-full"
                placeholder="Last name"
                value={userDetail.lastName}
                onChange={(e) =>
                  setUserDetail({ ...userDetail, lastName: e.target.value })
                }
              />
            </div>
          )}
          <input
            className="p-2 border border-[#770006] w-full"
            placeholder="Email"
            value={userDetail.email}
            onChange={(e) =>
              setUserDetail({ ...userDetail, email: e.target.value })
            }
          />
          <input
            className="p-2 border border-[#770006] w-full mt-4"
            placeholder="Password"
            value={userDetail.password}
            onChange={(e) =>
              setUserDetail({ ...userDetail, password: e.target.value })
            }
            type="password"
          />
          {actionType === "login" && (
            <p className="text-sm font-medium mt-2">Forgot your password?</p>
          )}
          <div className="px-4 md:px-8 lg:px-12 w-full text-sm md:text-base">
            <button className="bg-[#770006] text-sm md:text-base text-uppercase text-white p-3 rounded w-full my-4">
              {actionType === "login" ? "SIGN IN" : "CREATE"}
            </button>
          </div>
          <div className="flex flex-row items-center w-full justify-between">
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
          </div>
        </div>
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
