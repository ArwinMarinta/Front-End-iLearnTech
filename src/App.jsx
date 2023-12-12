import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/Register";
import LoginPage from "./pages/LoginPage/Login";
import DetailPage from "./pages/DetailPage/DetailPage/DetailPage";
import ProfilePage from "./pages/ProfilePage/Profile";
import NotificationPage from "./pages/NotificationPage/notifications";
import ResetPasswordPage from "./pages/PasswordPage/ResetPassword";
import MyCourse from "./pages/Class/MyCourse";
import Course from "./pages/Class/Course";
import LoginAdmin from "./pages/LoginPage/LoginAdmin";
import HomeAdmin from "./pages/DasboardAdminPage/HomeAdmin";
import ManageCourse from "./pages/DasboardAdminPage/ManageCourse";
import OtpPage from "./pages/OtpPage/Otp";
import VerifyEmail from "./pages/PasswordPage/VerifyEmail";
import DetailPaymentPage from "./pages/DetailPage/DetailClassPayment";
import ChangePassword from "./pages/ProfilePage/ChangePassword";
import DetailContent from "./pages/DetailPage/DetailContent/DetailContent";
import HistoryPage from "./pages/ProfilePage/Histori";
import Proctected from "./components/Protecd/Proctected";
import NoAccesToken from "./components/Protecd/NoAccesToken";
import NotFound from "./pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <Proctected>
              <RegisterPage />
            </Proctected>
          }
        />
        <Route
          path="/login"
          element={
            <Proctected>
              <LoginPage />
            </Proctected>
          }
        />
        <Route
          path="/profile"
          element={
            <NoAccesToken>
              <ProfilePage />
            </NoAccesToken>
          }
        />
        <Route path="/detail/course/:courseId" element={<DetailPage />} />
        <Route
          path="/detail/course/:courseId/module/:moduleId/content/:contentId"
          element={<DetailContent />}
        />
        <Route
          path="/detail/payment"
          element={
            <NoAccesToken>
              <DetailPaymentPage />
            </NoAccesToken>
          }
        />
        <Route
          path="/notification"
          element={
            <NoAccesToken>
              <NotificationPage />
            </NoAccesToken>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <Proctected>
              <ResetPasswordPage />
            </Proctected>
          }
        />
        <Route
          path="/my-course"
          element={
            <NoAccesToken>
              <MyCourse />
            </NoAccesToken>
          }
        />
        <Route path="/course/:nameCourse" element={<Course />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/home-admin" element={<HomeAdmin />} />
        <Route path="/manage-course" element={<ManageCourse />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/otp"
          element={
            <Proctected>
              <OtpPage />
            </Proctected>
          }
        />
        <Route
          path="/verify-email"
          element={
            <Proctected>
              <VerifyEmail />
            </Proctected>
          }
        />
        <Route
          path="/change-password"
          element={
            <NoAccesToken>
              <ChangePassword />
            </NoAccesToken>
          }
        />
        <Route
          path="/history"
          element={
            <NoAccesToken>
              <HistoryPage />
            </NoAccesToken>
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={500}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
