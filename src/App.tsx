import "./index.css";
import LandingPage from "./components/Landing";
import ClubDashboard from "./components/ClubDashboard";
import { BrowserRouter, Routes, Route } from "react-router";
import { UserProvider } from "./hooks/useUser";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUpPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={
              <UserProvider>
                <ClubDashboard />
              </UserProvider>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
