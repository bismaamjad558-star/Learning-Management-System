import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await API.get("/enrollment/my-courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEnrollments(data.enrollments || []);
    } catch (error) {
      console.log(error);
    }
  };

  const totalProgress = enrollments.length
    ? Math.round(
        enrollments.reduce(
          (sum, item) => sum + Number(item.progress || 0),
          0
        ) / enrollments.length
      )
    : 0;

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-b-3xl shadow-lg">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <h1 className="text-5xl font-bold">
            Welcome, {user?.name} 👋
          </h1>

          <p className="mt-4 text-blue-100 text-lg">
            Manage your courses, monitor your progress and continue learning.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

            <h3 className="text-gray-500">
              📚 Enrolled Courses
            </h3>

            <h2 className="text-4xl font-bold text-blue-600 mt-3">
              {enrollments.length}
            </h2>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

            <h3 className="text-gray-500">
              📈 Learning Progress
            </h3>

            <h2 className="text-4xl font-bold text-green-600 mt-3">
              {totalProgress}%
            </h2>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-5">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: `${totalProgress}%` }}
              ></div>
            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

            <h3 className="text-gray-500">
              👤 Account
            </h3>

            <h2 className="text-2xl font-bold mt-3">
              {user?.role}
            </h2>

            <p className="text-gray-500 mt-2">
              {user?.email}
            </p>

          </div>

        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg mt-10 p-8">

          <h2 className="text-2xl font-bold mb-6">
            ⚡ Quick Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/courses"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Browse Courses
            </Link>

            {user?.role === "instructor" && (
              <Link
                to="/create-course"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Create Course
              </Link>
            )}

            <Link
              to="/profile"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              My Profile
            </Link>

          </div>

        </div>

        {/* My Courses */}
        <div className="bg-white rounded-2xl shadow-lg mt-10 p-8">

          <h2 className="text-3xl font-bold mb-6">
            🎓 My Courses
          </h2>

          {enrollments.length === 0 ? (

            <div className="text-center py-10">

              <h3 className="text-2xl font-semibold text-gray-500">
                No Courses Enrolled Yet
              </h3>

              <p className="text-gray-400 mt-3">
                Explore courses and start learning today.
              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {enrollments.map((item) => (

                <div
                  key={item._id}
                  className="border rounded-xl p-5 hover:shadow-lg transition"
                >

                  <div className="flex justify-between items-center">

                    <div>

                      <h3 className="text-xl font-bold">
                        {item.course?.title}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Progress: {item.progress || 0}%
                      </p>

                    </div>

                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                      {item.progress || 0}%
                    </span>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}