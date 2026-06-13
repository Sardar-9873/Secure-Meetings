import FileNotFound from "./pages/404/index.jsx";
import HomePage from "./pages/home/index.jsx";
import SignUpPage from "./pages/signup/index.jsx";
import SignInPage from "./pages/signin/index.jsx";
import OrganizationPage from "./pages/organization/index.jsx";
import OrganizationLayout from "./pages/organization/Organization-Layout.jsx";
import UserListingPage from "./pages/organization/user/listing/index.jsx";
import UserAddPage from "./pages/organization/user/add/index.jsx";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<FileNotFound />} />
      <Route path="/" element={<HomePage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="organization" element={<OrganizationLayout />}>
      <Route index element={<OrganizationPage />} />
        <Route path="user">
          <Route index element={<UserListingPage />} />
          <Route path="add" element={<UserAddPage />} />
        </Route>
      </Route>

    </Routes>
  );
}