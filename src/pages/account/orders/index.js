/* eslint-disable react-hooks/rules-of-hooks */
import Account from "@/containers/Account";
import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import useAsync from "@/hooks/useAsync";
import OrderServices from "@/services/OrderServices";
import { UserContext } from "@/context/UserContext";
import OrderHistory from "@/components/order/OrderHistory";
import Link from "next/link";

const index = () => {
  const router = useRouter();
  const [tableData, setTableData] = useState([]);
  const { data } = useAsync(OrderServices.getOrderByUser);

  useEffect(() => {
    if (data?.length > 0) {
      setTableData(data);
    }
  }, [data]);

  const tableContent = [
    {
      id: "jwhjw",
      orderTime: "31st July, 2023",
      method: "online",
      status: "Delivered",
      total: 2,
    },
    {
      id: "jwhjw2",
      orderTime: "31st July, 2023",
      method: "online",
      status: "Delivered",
      total: 2,
    },
    {
      id: "jwhjw3",
      orderTime: "31st July, 2023",
      method: "online",
      status: "Delivered",
      total: 2,
    },
  ];

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
        <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="bg-gray-100">
              <th
                scope="col"
                className="text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
              >
                OrderTime
              </th>

              <th
                scope="col"
                className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
              >
                Method
              </th>
              <th
                scope="col"
                className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
              >
                Total
              </th>
              <th
                scope="col"
                className="text-right text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData?.map((order) => (
              <tr key={order._id}>
                <OrderHistory order={order} />
                <td className="px-5 py-3 whitespace-nowrap text-right text-sm">
                  <Link href={`/order/${order._id}`}>
                    <a className="px-3 py-1 bg-emerald-100 text-xs text-emerald-600 hover:new-bg hover:text-white transition-all font-semibold rounded-full">
                      Details
                    </a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Account>
  );
};

export default index;
