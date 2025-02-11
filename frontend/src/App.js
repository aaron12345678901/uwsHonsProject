import "./CSS/style.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// public pages/////////
import Home from "./public-pages/Home";
import Register from "./public-pages/Register";
import Login from "./public-pages/Login";
import Aboutus from "./public-pages/Aboutus";

///////////users pages////////
import Userprofile from "../src/users-pages/Userprofile";
import UserWorkout from "../src/users-pages/UsersWorkout";
import UserEditworkout from "../src/users-pages/Editworkout";
import UserBuildWorkout from "../src/users-pages/UserBuildWorkout";
import UserNewRoutine from "../src/users-pages/UserNewRoutine";
import UserPreBuiltRoutine from "../src/users-pages/UserprebuiltRoutines";
import UserCustomWorkout from "./users-pages/UserCustomWorkout";

///////////Admin pages////////
import AdminHome from "../src/admin-pages/AdminHome";
import AdminAllUsers from "./admin-pages/AdminAllUsers";
import AdminViewUser from "./admin-pages/AdminViewUser";
import AdminAllExercises from "./admin-pages/AdminAllExercises";
import AdminEditExercise from "./admin-pages/AdminEditExercise";
import AdminAddExercise from "./admin-pages/AdminAddExercise";
import AdminPreMadeRoutines from "./admin-pages/AdminPreMadeRoutines";
import AdminaddNewRoutine from "./admin-pages/AdminaddNewRoutine";
import AdminEditRoutineWorkout from "./admin-pages/AdminEditRoutineWorkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* users Routes */}
          <Route path="/Userprofile" element={<Userprofile />} />
          <Route path="/UserWorkout" element={<UserWorkout />} />


         {/* {admin pages } */}
          <Route path="/AdminAddExercise" element={<AdminAddExercise />} />

          
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
