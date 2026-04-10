import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home/Home";
import LoginPage from "@/pages/Auth/Login";
import RegisterPage from "@/pages/Auth/Register";
import RegisterCompany from "@/pages/Auth/RegisterCompany";
import JobDetailsPage from "@/pages/job/JobDetails";
import CompanyDashboard from "@/pages/Company/CompanyDashboard";
import CompanyProfile from "@/pages/Company/CompanyProfile";
import CompanySettings from "@/pages/Company/CompanySettings";
import ManageJobs from "@/pages/Company/ManageJobs";
import CreateJob from "@/pages/Company/CreateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "register-company", element: <RegisterCompany /> },
      { path: "job-details", element: <JobDetailsPage /> },
      { path: "company-dashboard", element: <CompanyDashboard /> },
      { path: "company-profile", element: <CompanyProfile /> },
      { path: "company-setting", element: <CompanySettings /> },
      { path: "manage-jobs", element: <ManageJobs /> },
      { path: "create-job", element: <CreateJob /> },
    ],
  },
]);

export default router;
