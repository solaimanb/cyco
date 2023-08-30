import React from 'react';
import {
  BiExport,
  BiSolidCamera,
  BiSolidKey,
  BiSolidSave,
} from 'react-icons/bi';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import useAuth from '../../../hooks/useAuth';

const UsersHome = () => {
  const { user } = useAuth();
  console.log(user);
  const firstName = user?.displayName?.split(' ')[0];
  const lastName = user?.displayName?.split(' ')[1];
  const data = [
    {
      name: 'Day 1',
      timeSpent: 170,
    },
    {
      name: 'Day 2',
      timeSpent: 380,
    },
    {
      name: 'Day 3',
      timeSpent: 200,
      pv: 40,
      amt: 200,
    },
    {
      name: 'Day 4',
      timeSpent: 278,
      pv: 40,
      amt: 200,
    },
    {
      name: 'Day 5',
      timeSpent: 189,
      pv: 40,
      amt: 200,
    },
    {
      name: 'Day 6',
      timeSpent: 239,
      pv: 40,
      amt: 200,
    },
    {
      name: 'Day 7',
      timeSpent: 349,
      pv: 40,
      amt: 200,
    },
  ];

  return (
    <div className="px-2">
      <div className="bg-zinc-700 bg-opacity-50 w-full p-6 border rounded-md">
        <div>
          <h2 className="text-2xl text-cyred pb-4 font-semibold">
            Welcome to your Profile {user?.displayName}...
          </h2>
        </div>
        <div className="flex items-center ">
          <div className="border-2 border-cyred rounded-full p-2 bg-zinc-400 bg-opacity-40 mr-8 relative">
            <img
              src={user.photoURL}
              className="w-[150px]  rounded-full"
              alt=""
            />
            <span className="absolute top-3 right-3 bg-cyred border-2 rounded-full p-1">
              <BiSolidCamera className="text-xl" />
            </span>
          </div>
          <div className="space-y-4 w-full">
            <div className="flex items-center ">
              First Name:{' '}
              <span className="ml-2 p-2 border rounded-lg bg-zinc-900 bg-opacity-40 w-2/3">
                {firstName}
              </span>
            </div>
            <div className="flex items-center ">
              Last Name:{' '}
              <span className="ml-2 p-2 border rounded-lg bg-zinc-900 bg-opacity-40 w-2/3">
                {lastName}{' '}
              </span>
            </div>
            <div className="flex items-center ">
              Login/Email:{' '}
              <span className="ml-2 p-2 border rounded-lg bg-zinc-900 bg-opacity-40 w-2/3">
                {user?.email}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-8 pb-4">
          <button className="bg-black py-2 px-4 border-y-cyred border-2 border-x-0 rounded-md flex items-center gap-2 hover:bg-cyred duration-500">
            <BiSolidSave /> Save Profile{' '}
          </button>
        </div>
        <div className="flex justify-end gap-4">
          <button className="bg-sky-700 py-2 px-4 text-sm rounded-md hover:bg-sky-900 flex items-center gap-2">
            <BiSolidKey /> Change Password
          </button>
          <button className="bg-sky-700 py-2 px-4 text-sm rounded-md hover:bg-sky-900 flex items-center gap-2">
            <BiExport /> Export Account data
          </button>
        </div>
      </div>
      <div className="bg-zinc-700 bg-opacity-50 w-full p-6 mt-4 border-2 rounded-md">
        <div className="">
          <h2 className="pb-6">
            Your last week spent time on{' '}
            <span className="text-cyred font-bold">Cyco</span>
          </h2>
          <div style={{ width: '95%', height: 240 }}>
            <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `${value} min`} />
                <Area
                  type="monotone"
                  dataKey="timeSpent"
                  stroke="#800"
                  fill="#800"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default UsersHome;
