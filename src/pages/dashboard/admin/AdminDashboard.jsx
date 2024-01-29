import React from 'react';
import { BsBell, BsPeopleFill, BsSearch } from 'react-icons/bs';
import { CgPerformance } from 'react-icons/cg';
import { MdContentPasteSearch, MdSpatialTracking } from 'react-icons/md';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import useMonthlyRevenue from '../../../hooks/useMonthlyRevenue';
import useMovies from '../../../hooks/useMovies';
import useUsers from '../../../hooks/useUsers';
import useTitle from '../../../hooks/useTitle';

const AdminDashboard = () => {
  // title
  useTitle('Admin Dashbord | CYCO ')
  const [movies, loading] = useMovies();
  const currentDate = new Date();


  console.log(movies.length)

  console.log(currentDate);
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [users] = useUsers();
  const totalUsers = users.length * 111;
  const dailyActiveUsers = Math.floor(totalUsers / 7);
  const monthlyActiveUsers = Math.floor(dailyActiveUsers * 29);

  // console.log(users.length);

  const { monthlyRevenue } = useMonthlyRevenue();

  console.log(monthlyRevenue);

  return (
    <div className="min-h-screen p-4 bg-zinc-950 overflow-y-auto">
      <div className="flex justify-between items-center border rounded-lg bg-zinc-600 mb-4 p-2">
        {/* <h1 className='text-xl font-semibold'>Admin Home Dashboard</h1> */}
        <div></div>
        <div className="text-2xl flex gap-4 cursor-pointer">
          <BsSearch />
          <BsBell />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Content Overview */}
        <div className="bg-sky-600 hover:bg-sky-700 p-4 rounded">
          <MdContentPasteSearch className="text-3xl bg-zinc-300 text-sky-600 rounded-full p-2 w-12 h-12 mx-auto mb-2" />
          <h2 className="font-semibold mb-3">Content Overview</h2>

          <div className="text-sm space-y-2">
            <p>
              Total Movies:{' '}
              <span className="font-bold text-white">{movies?.length*10}</span>
            </p>
            <p>
              Total TV Shows: <span className="font-bold text-white">300</span>
            </p>
            <p>
              New Content (Last Week):{' '}
              <span className="font-bold text-white"> 57</span>
            </p>
          </div>
        </div>

        {/* User Analytics */}
        <div className="bg-emerald-600 hover:bg-emerald-700 p-4 rounded">
          <BsPeopleFill className="text-3xl bg-zinc-300 text-emerald-600 rounded-full p-2 w-12 h-12 mx-auto mb-2" />
          <h2 className="font-semibold mb-3">User Analytics</h2>
          <div className="text-sm space-y-2">
            <p>
              Total Users:{' '}
              <span className="font-bold text-white">{totalUsers}</span>
            </p>
            <p>
              Daily Active Users:{' '}
              <span className="font-bold text-white">{dailyActiveUsers}</span>
            </p>
            <p>
              Monthly Active Users:{' '}
              <span className="font-bold text-white">{monthlyActiveUsers}</span>
            </p>
          </div>
        </div>

        {/* Content Performance */}
        <div className="bg-violet-800 hover:bg-violet-900 p-4 rounded">
          <CgPerformance className="text-3xl bg-zinc-300 text-violet-800 rounded-full p-2 w-12 h-12 mx-auto mb-2" />
          <h2 className="font-semibold mb-3">Content Performance</h2>
          <div className="text-sm space-y-2">
            <p>
              Trending Movie:{' '}
              <span className="font-bold text-white">"Blockbuster"</span>
            </p>
            <p>
              Top-rated TV Show:{' '}
              <span className="font-bold text-white">"Fan Favorites"</span>{' '}
            </p>
            <p>
              Avg. Watch Time:{' '}
              <span className="font-bold text-white">25 mins</span>
            </p>
          </div>
        </div>

        {/* Revenue Tracking */}
        <div className="bg-rose-700 hover:bg-rose-800 p-4 rounded">
          <MdSpatialTracking className="text-3xl bg-zinc-300 text-rose-700 rounded-full p-2 w-12 h-12 mx-auto mb-2" />
          <h2 className="font-semibold mb-3">Revenue Tracking</h2>
          <div className="text-sm space-y-2">
            <p>
              Total Revenue:{' '}
              <span className="font-bold text-white">$25,000</span>{' '}
            </p>
            <p>
              Revenue Growth (Last Month):{' '}
              <span className="font-bold text-white"> +15%</span>
            </p>
            <p>
              Subscription Revenue:{' '}
              <span className="font-bold text-white">$18,000</span>{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 p-4 mt-6">
        <h2 className="">Charts:</h2>
        <div className="grid lg:grid-cols-2 gap-4 mt-6 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-zinc-950 p-4 mt-6">
        <h2>Summary:</h2>
        <div className="grid lg:grid-cols-3 gap-4 mt-6">
          {/* Subscription Management */}
          <div className="bg-zinc-800 p-4 rounded-ss-xl rounded-ee-xl w-2/3 lg:w-full mx-auto  shadow-inner shadow-slate-500">
            <h2 className="text-lg text-red-600 font-semibold mb-3">
              Subscription Management
            </h2>
            <p>Active Subscribers: 1200</p>
            <p>Churn Rate: 8%</p>
            <p>Subscription Plans:</p>
            <ul className="list-disc pl-6">
              <li>Basic Plan: $9.99/month</li>
              <li>Premium Plan: $14.99/month</li>
              <li>Family Plan: $19.99/month</li>
            </ul>
          </div>

          {/* Reports and Analytics */}
          <div className="bg-zinc-800 p-4 rounded-ss-xl rounded-ee-xl w-2/3 lg:w-full mx-auto  shadow-inner shadow-slate-500">
            <h2 className="text-lg text-red-600 font-semibold mb-3">
              Reports and Analytics
            </h2>
            <p>User Engagement Report</p>
            <p>Content Performance Analysis</p>
            <p>Revenue Trends Report</p>
          </div>

          {/* User Management */}
          <div className="bg-zinc-800 p-4 rounded-ss-xl rounded-ee-xl w-2/3 lg:w-full mx-auto  shadow-inner shadow-slate-500">
            <h2 className="text-lg text-red-600 font-semibold mb-3">
              User Management
            </h2>
            <p>Total Users: 1500</p>
            <p>Active Users: 1200</p>
            <p>Banned Users: 20</p>
            <p>Role Distribution:</p>
            <ul className="list-disc pl-6">
              <li>Admins: 3</li>
              <li>Moderators: 8</li>
              <li>Users: 1487</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
