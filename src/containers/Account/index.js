import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";
import Cookies from "js-cookie";

const Account = ({ children }) => {
  const router = useRouter();
  const [pageType, setPageType] = useState("loading");
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    if (router.asPath.includes("orders")) {
      setPageType("orders");
    } else {
      setPageType("account");
    }
  }, [router.asPath, router.isReady]);

  const handleLogOut = () => {
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    Cookies.remove("couponInfo");
    router.push("/");
  };

  return (
    <div className="pt-14 px-4 md:px-20 lg:px-48 text-[#770006]">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 md:col-span-1 flex flex-row md:flex-col w-full justify-between md:justify-start">
          <Link
            className={`border ${
              pageType === "account" ? "border-[#770006]" : ""
            } p-3 shadow hover:shadow-sm text-center`}
            href="/account"
          >
            My Profile
          </Link>
          <Link
            className={` border ${
              pageType === "orders" ? "border-[#770006]" : ""
            } p-3 shadow hover:shadow-sm md:mt-4 text-center`}
            href="/account/orders"
          >
            My Orders
          </Link>
          <button
            onClick={handleLogOut}
            className="border  p-3 shadow hover:shadow-sm md:mt-4"
          >
            Logout
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Account;
