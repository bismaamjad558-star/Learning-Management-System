import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import EditCourse from "./pages/EditCourse";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Enrollment from "./pages/Enrollment";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CreateCourse from "./pages/CreateCourse";

function App() {
  return (
    <>
      <Navbar />
<Routes>

  <Route path="/" element={<Home />} />

  <Route path="/login" element={<Login />} />

  <Route path="/register" element={<Register />} />


  {/* Protected Dashboard */}
  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />


  <Route path="/courses" element={<Courses />} />


  <Route
    path="/create-course"
    element={
      <ProtectedRoute>
        <CreateCourse />
      </ProtectedRoute>
    }
  />


  <Route path="/courses/:id" element={<CourseDetails />} />


  <Route
    path="/edit-course/:id"
    element={
      <ProtectedRoute>
        <EditCourse />
      </ProtectedRoute>
    }
  />



  <Route
    path="/enrollments"
    element={
      <ProtectedRoute>
        <Enrollment />
      </ProtectedRoute>
    }
  />



  <Route
    path="/profile"
    element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    }
  />


  <Route path="*" element={<NotFound />} />

</Routes>
    </>
  );
}

export default App;