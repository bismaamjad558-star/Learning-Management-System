import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logout Successful");

    navigate("/login");

  };

  return (

    <nav className="sticky top-0 z-50 bg-white shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-700"
        >
          🎓 LMS
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6 font-medium">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="hover:text-blue-600 transition"
          >
            Courses
          </Link>

          {token && (
            <>
              <Link
                to="/dashboard"
                className="hover:text-blue-600 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/create-course"
                className="hover:text-blue-600 transition"
              >
                Create Course
              </Link>

              <Link
                to="/enrollments"
                className="hover:text-blue-600 transition"
              >
                Enrollments
              </Link>

              <Link
                to="/profile"
                className="hover:text-blue-600 transition"
              >
                Profile
              </Link>
            </>
          )}

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {token ? (
            <>
              <span className="hidden md:block text-gray-700">
                Welcome,
                <span className="font-bold text-blue-700">
                  {" "} {user?.name}
                </span>
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-blue-700 hover:text-blue-900"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>

    </nav>

  );

}