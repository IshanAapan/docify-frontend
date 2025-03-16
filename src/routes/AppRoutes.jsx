import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Appointments from "../pages/Appointments";
import ApplyForDoctor from "../pages/ApplyForDoctor";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Admin, Protected, Public } from "../middleware/route";
import DashBoard from "../pages/Admin/DashBoard";
import Error from "../pages/Error";
const AppRoutes = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="doctors" element={<Doctors />} />
          <Route
            path="appointments"
            element={
              <Protected>
                <Appointments />
              </Protected>
            }
          />
          <Route
            path="applyfordoctor"
            element={
              <Protected>
                <ApplyForDoctor />
              </Protected>
            }
          />
          <Route
            path="profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="login"
            element={
              <Public>
                <Login />
              </Public>
            }
          />
          <Route
            path="signup"
            element={
              <Public>
                <Register />
              </Public>
            }
          />
          <Route
            path="dashboard/users"
            element={<Admin>
              <DashBoard type={"users"} />
            </Admin>}
          />
          <Route
            path="dashboard/doctors"
            element={
              <Admin>
                <DashBoard type={"Doctors"} />
              </Admin>}
          />
          <Route
            path="dashboard/appointments"
            element={<Admin>
              <DashBoard type={"Appointments"} />
            </Admin>}
          />
          <Route
            path="dashboard/applications"
            element={<Admin>
              <DashBoard type={"Applications"} />
            </Admin>}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRoutes;
