import React from "react";
import { useEffect } from "react";
import { TbFidgetSpinner } from "react-icons/Tb";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../../store/slices/paymenthistorySlice/paymentHistorySlice";
import AdminPaymentTab from "./AdminPaymentTab";
import useAuth from "../../../../hooks/useAuth";
import Loading from "../../../../components/loading/Loading";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
const AdminPaymentHistory = () => {
  const { loading } = useAuth();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.paymentHistory.data);
  const status = useSelector((state) => state.paymentHistory.status);
  const error = useSelector((state) => state.paymentHistory.error);
  console.log(data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === "loading") {
    return <TbFidgetSpinner className="m-auto animate-spin" size={24} />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="">
      <div className="navbar mx-2 mt-5 md:mt-1 lg:mt-1 bg-base-100 ">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Payment History</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Table removeWrapper aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Email</TableColumn>
          <TableColumn>Membership</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Date</TableColumn>
          <TableColumn>TransectionId</TableColumn>
         
        </TableHeader>
        <TableBody>
          {data &&
            data.map((data) => (
              <TableRow data={data} key={data._id}>
                <TableCell>{data?.email}</TableCell>
                <TableCell>{data?.membership}</TableCell>
                <TableCell>{data?.price}</TableCell>
                <TableCell>{data?.date.slice(0, 7)}</TableCell>
                <TableCell>{data?.transectionId}</TableCell>
               
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminPaymentHistory;
