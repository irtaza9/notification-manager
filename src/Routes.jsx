import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import ProtectedRoutesGuard from "./components/guards/Protected/ProtectedRoutesGuard";
import PublicRoutesGuard from "./components/guards/Public/PublicRoutesGuard";
import ProjectList from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Authentication/Login";
import AuthOTP from "./pages/Authentication/OTP/otp";
import DashboardLayout from "./components/Layout/Dashboard/DashboardLayout";
import ProjectGuard from "./components/guards/Project/ProjectGuard";
import CreatePush from "./pages/Createcampaign/Push";
import NotificationHistory from "./pages/History";
import CreateNotificationPush from "./pages/CreateNotificationPush";
import AllNotifications from "./pages/AllNotifications";
import Email from "./pages/Email";
import InAPP from "./pages/InApp";
import Sms from "./pages/Sms";
import Templates from "./pages/Templates";
import Automated from "./pages/Automated";

const MainRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ProtectedRoutesGuard />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<ProjectList />} />
            <Route path="project" element={<ProjectGuard />}>
              <Route path=":slug" element={<Navigate to={"dashboard"} />} />
              <Route path=":slug/dashboard" element={<Dashboard />} />
              <Route path=":slug/campaigns" element={<CreatePush />} />
              <Route
                path=":slug/notifications"
                element={<AllNotifications />}
              />
              <Route
                path=":slug/notifications/new"
                element={<CreateNotificationPush />}
              />
              <Route
                path=":slug/notifications/:id"
                element={<NotificationHistory />}
              />
              <Route path=":slug/email" element={<Email />} />
              <Route path=":slug/in-app-messages" element={<InAPP />} />
              <Route path=":slug/sms" element={<Sms />} />
              <Route path=":slug/templates" element={<Templates />} />
              <Route path=":slug/automated" element={<Automated />} />
            </Route>
          </Route>
        </Route>

        <Route element={<PublicRoutesGuard />}>
          <Route
            path="auth-login"
            element={<Login />}
            errorElement={<div>Error</div>}
          />
          <Route path="auth-otp" element={<AuthOTP />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default MainRoutes;
