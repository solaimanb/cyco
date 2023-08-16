
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h3 className="text-center">Dashing DashBoard </h3>
      <Outlet />
    </div>
  )
}

export default Dashboard
