/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Account from "@/containers/Account";
import InputArea from "@/components/form/InputArea";
import Error from "@/components/form/Error";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { UserContext } from "@/context/UserContext";

const index = () => {
  const router = useRouter();
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("address", user.address);
      setValue("phone", user.phone);
    }
  }, []);

  const {
    state: { userInfo },
  } = useContext(UserContext);

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
        <div className="w-full grid grid-cols-6 gap-6 ">
          <div className="col-span-6 sm:col-span-3">
            <InputArea
              register={register}
              label="Full Name"
              name="name"
              type="text"
              placeholder="Full Name"
            />
            <Error errorName={errors.name} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <InputArea
              register={register}
              label="Your Address"
              name="address"
              type="text"
              placeholder="Your Address"
            />
            <Error errorName={errors.address} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <InputArea
              register={register}
              label="Phone/Mobile"
              name="phone"
              type="tel"
              placeholder="Your Mobile Number"
            />
            <Error errorName={errors.phone} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <InputArea
              register={register}
              label="Email Address"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Error errorName={errors.email} />
          </div>
        </div>
      </div>
    </Account>
  );
};

export default index;
