import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./views/auth/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import Profile from "./views/user/Profile";
import Message from "./views/Message";
import UserContextProvider from "./contexts/UserContext";
import EditProfile from "./views/user/EditProfile";
import OnBoarding from "./components/layout/OnBoarding";

const App = () => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Auth authRoute="home" />} />
            <Route exact path="/login" element={<Auth authRoute="login" />} />
            <Route
              exact
              path="/register"
              element={<Auth authRoute="register" />}
            />
            <Route exact path="/onboarding" element={<OnBoarding />} />
            <Route exact path="/dashboard" element={<ProtectedRoute />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route exact path="/profile" element={<ProtectedRoute />}>
              <Route exact path="/profile" element={<Profile />} />
            </Route>
            <Route exact path="/profile/:username" element={<ProtectedRoute />}>
              <Route exact path="/profile/:username" element={<Profile />} />
            </Route>
            <Route exact path="/edit-profile/:id" element={<ProtectedRoute />}>
              <Route exact path="/edit-profile/:id" element={<EditProfile />} />
            </Route>
            <Route exact path="/message" element={<ProtectedRoute />}>
              <Route exact path="/message" element={<Message />} />
            </Route>
          </Routes>
        </Router>
      </UserContextProvider>
    </AuthContextProvider>
  );
};

export default App;
