import "./CSS/style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Public Pages
import Home from "./public-pages/Home";
import Register from "./public-pages/Register";
import Login from "./public-pages/Login";
import Aboutus from "./public-pages/Aboutus";

// User Pages
import Userprofile from "../src/users-pages/Userprofile";
import UserWorkout from "../src/users-pages/UsersWorkout";
import UserEditworkout from "../src/users-pages/Editworkout";
import UserBuildWorkout from "../src/users-pages/UserBuildWorkout";
import UserPreBuiltRoutine from "../src/users-pages/UserprebuiltRoutines";
import UserCustomWorkout from "./users-pages/UserCustomWorkout";
import Userviewpremadeworkouts from "../src/users-pages/Userviewpremadeworkouts";

// Admin Pages
import AdminHome from "../src/admin-pages/AdminHome";
import AdminAllUsers from "./admin-pages/AdminAllUsers";
import AdminViewUser from "./admin-pages/AdminViewUser";
import AdminAllExercises from "./admin-pages/AdminAllExercises";
import AdminEditExercise from "./admin-pages/AdminEditExercise";
import AdminAddExercise from "./admin-pages/AdminAddExercise";
import AdminPreMadeRoutines from "./admin-pages/AdminPreMadeRoutines";
import AdminusersWorkout from "./admin-pages/AdminusersWorkout";
import Adminbuildworkout from "./admin-pages/Adminbuildworkout";
import AdminEditworkout from "./admin-pages/AdminEditworkout";
import AdminAddExerciseToWorkout from "./admin-pages/AdminAddExerciseToWorkout";

// JWT Authentication Check
const getToken = () => localStorage.getItem("token");

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected User Routes */}
          <Route
            path="/Userprofile"
            element={
              <ProtectedRoute>
                <Userprofile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/UserWorkout"
            element={
              <ProtectedRoute>
                <UserWorkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/UserEditworkout"
            element={
              <ProtectedRoute>
                <UserEditworkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/UserBuildWorkout"
            element={
              <ProtectedRoute>
                <UserBuildWorkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/UserPreBuiltRoutine"
            element={
              <ProtectedRoute>
                <UserPreBuiltRoutine />
              </ProtectedRoute>
            }
          />
          <Route
            path="/UserCustomWorkout"
            element={
              <ProtectedRoute>
                <UserCustomWorkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Userviewpremadeworkouts/:id"
            element={
              <ProtectedRoute>
                <Userviewpremadeworkouts />
              </ProtectedRoute>
            }
          />

          {/* Protected Admin Routes */}
          <Route
            path="/AdminHome"
            element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminAllUsers"
            element={
              <ProtectedRoute>
                <AdminAllUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminViewUser/:id"
            element={
              <ProtectedRoute>
                <AdminViewUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminusersWorkout/:id"
            element={
              <ProtectedRoute>
                <AdminusersWorkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminPreMadeRoutines"
            element={
              <ProtectedRoute>
                <AdminPreMadeRoutines />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Adminbuildworkout"
            element={
              <ProtectedRoute>
                <Adminbuildworkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminEditworkout/:id"
            element={
              <ProtectedRoute>
                <AdminEditworkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminAddExerciseToWorkout"
            element={
              <ProtectedRoute>
                <AdminAddExerciseToWorkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminAllExercises"
            element={
              <ProtectedRoute>
                <AdminAllExercises />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminAddExercise"
            element={
              <ProtectedRoute>
                <AdminAddExercise />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AdminEditExercise/:id"
            element={
              <ProtectedRoute>
                <AdminEditExercise />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
