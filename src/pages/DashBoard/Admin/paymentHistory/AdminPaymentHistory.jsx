import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../../../hooks/useAuth';
import { fetchData } from '../../../../store/slices/paymenthistorySlice/paymentHistorySlice';
import useTitle from '../../../../hooks/useTitle';

const AdminPaymentHistory = () => {
  // title
  useTitle("Admin Payment History | CYCO")
  
  const { loading } = useAuth();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.paymentHistory.data);
  const status = useSelector((state) => state.paymentHistory.status);
  const error = useSelector((state) => state.paymentHistory.error);
  console.log(data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // if (status === 'loading') {
  //   return <TbFidgetSpinner className="m-auto animate-spin" size={24} />;
  // }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      {/* User Feedback Header */}
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          Payment History
        </p>
      </div>

      <div className="mt-10 w-full">
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
                <TableRow data={data} key={data?._id}>
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
    </section>
  );
};

export default AdminPaymentHistory;
