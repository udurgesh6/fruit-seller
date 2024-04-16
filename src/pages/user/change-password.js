import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import Error from "@/components/form/Error";
import InputArea from "@/components/form/InputArea";
import UserServices from "@/services/UserServices";
import { notifyError, notifySuccess } from "@/utils/toast";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  //

  const onSubmit = ({ email, currentPassword, newPassword }) => {
    UserServices.changePassword({ email, currentPassword, newPassword })
      .then((res) => {
        notifySuccess(res.message);
      })
      .catch((err) => {
        notifyError(err ? err.response.data.message : err.message);
      });
  };

  useEffect(() => {
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      setValue("email", user.email);
    }
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col min-w-[500px] w-full h-full items-center justify-center"
    >
      <div className="md:grid-cols-6 md:gap-6">
        <div className="md:mt-0 md:col-span-2">
          <div className="lg:mt-6 bg-white">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-6">
                <InputArea
                  register={register}
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="p-2 border border-[#770006] w-full -mt-2"
                />
                <Error errorName={errors.email} />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <InputArea
                  register={register}
                  name="currentPassword"
                  type="password"
                  placeholder="Your Current Password"
                  className="p-2 border border-[#770006] w-full -mt-2"
                />
                <Error errorName={errors.currentPassword} />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <InputArea
                  register={register}
                  name="newPassword"
                  type="password"
                  placeholder="Your New Password"
                  className="p-2 border border-[#770006] w-full -mt-2"
                />
                <Error errorName={errors.newPassword} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-right">
        <button
          type="submit"
          className=" text-center py-3 font-medium text-sm text-white transition-all focus:outline-none bg-[#770006] my-1 w-[200px]"
        >
          Change Password
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
