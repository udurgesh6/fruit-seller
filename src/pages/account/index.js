/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Account from "@/containers/Account";
import InputArea from "@/components/form/InputArea";
import Error from "@/components/form/Error";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { UserContext } from "@/context/UserContext";
import Uploader from "@/components/image-uploader/Uploader";
import BasicLoading from "@/components/Loading/BasicLoading";
import UserServices from "@/services/UserServices";
import { notifyError, notifySuccess } from "@/utils/toast";

const index = () => {
  const router = useRouter();

  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const {
    state: { userInfo },
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSubmitLoading(true);
    const userData = {
      name: data.name,
      email: data.email,
      address: data.address,
      phone: data.phone,
      image: imageUrl,
    };
    UserServices.updateUser(userInfo._id, userData)
      .then((res) => {
        if (res) {
          setLoading(false);
          notifySuccess("Profile Update Successfully!");
          Cookies.set("userInfo", JSON.stringify(res));
        }
      })
      .catch((err) => {
        setLoading(false);
        notifyError(err ? err?.response?.data?.message : err.message);
      })
      .finally(() => {
        setSubmitLoading(false);
      });
  };

  useEffect(() => {
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("address", user.address);
      setValue("phone", user.phone);
      setImageUrl(user.image);
    }
  }, []);

  useEffect(() => {
    if (!userInfo) {
      router.push("/");
    }
  }, [userInfo]);

  return (
    <Account>
      <div className="col-span-4 md:col-span-3 w-full shadow p-4">
        <h1 className="mb-4 font-semibold text-lg text-[#770006]">
          My Profile
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full grid grid-cols-6 gap-6 "
        >
          {/* <div className="bg-white space-y-6 col-span-6">
            <div>
              <div className="mt-1 flex items-center">
                <Uploader
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  user={userInfo && userInfo._id}
                  setLoading={setLoading}
                />
              </div>
            </div>
          </div> */}
          <div className="col-span-6 sm:col-span-3">
            <InputArea
              register={register}
              name="name"
              type="text"
              placeholder="Your Name"
              className="p-2 border border-[#770006] w-full"
            />
            <Error errorName={errors.name} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <InputArea
              register={register}
              name="address"
              type="text"
              placeholder="Your Address"
              className="p-2 border border-[#770006] w-full"
            />
            <Error errorName={errors.address} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <InputArea
              register={register}
              name="phone"
              type="tel"
              placeholder="Your Mobile Number"
              className="p-2 border border-[#770006] w-full"
            />
            <Error errorName={errors.phone} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <InputArea
              register={register}
              name="email"
              type="email"
              placeholder="Your Email"
              className="p-2 border border-[#770006] w-full"
            />
            <Error errorName={errors.email} />
          </div>
          <button
            disabled={submitLoading}
            type="submit"
            className="col-span-6 disabled:cursor-not-allowed md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center placeholder-white focus-visible:outline-none focus:outline-none bg-[#770006] text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
          >
            {submitLoading ? <BasicLoading /> : "Update Profile"}
          </button>
        </form>
      </div>
    </Account>
  );
};

export default index;
