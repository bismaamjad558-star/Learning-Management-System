import { useEffect, useState } from "react";
import API from "../services/api";

export default function Enrollment() {

  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {

    try {

      const token = localStorage.getItem("token");

      const { data } = await API.get(
        "/enrollment/my-courses",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEnrollments(data.enrollments || []);

    } catch (error) {

      console.log(error);

    }

  };

  // Remove Enrollment
  const handleRemove = async (id) => {

    const confirmRemove = window.confirm(
      "Remove this course from your enrollments?"
    );

    if (!confirmRemove) return;

    try {

      const token = localStorage.getItem("token");

      const { data } = await API.delete(
        `/enrollment/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message);

      fetchEnrollments();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Remove Failed"
      );

    }

  };

  // Update Progress
  const handleProgress = async (id, progress) => {

    if (!progress) return;

    try {

      const token = localStorage.getItem("token");

      const { data } = await API.put(
        `/enrollment/${id}/progress`,
        { progress },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message);

      fetchEnrollments();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Progress Update Failed"
      );

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          🎓 My Enrollments
        </h1>

        {enrollments.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">

            <h2 className="text-3xl font-bold text-gray-600">
              No Enrolled Courses
            </h2>

            <p className="text-gray-500 mt-3">
              Start learning by enrolling in a course.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {enrollments.map((item) => (

              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >

                <img
                  src={`http://localhost:5000/uploads/${item.course?.thumbnail}`}
                  alt={item.course?.title}
                  className="w-full h-52 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x300?text=Course";
                  }}
                />

                <div className="p-6">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.course?.category}
                  </span>

                  <h2 className="text-2xl font-bold mt-4">
                    {item.course?.title}
                  </h2>

                  <p className="text-gray-600 mt-3">
                    {item.course?.description}
                  </p>

                  <div className="mt-5">

                    <div className="flex justify-between mb-2">

                      <span className="font-semibold">
                        Progress
                      </span>

                      <span className="font-bold text-green-600">
                        {item.progress || 0}%
                      </span>

                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3">

                      <div
                        className="bg-green-500 h-3 rounded-full"
                        style={{
                          width: `${item.progress || 0}%`,
                        }}
                      ></div>

                    </div>

                  </div>

                  <select
                    className="w-full mt-5 border rounded-lg p-3"
                    defaultValue=""
                    onChange={(e) =>
                      handleProgress(
                        item._id,
                        e.target.value
                      )
                    }
                  >
                    <option value="">
                      Update Progress
                    </option>

                    <option value="25">
                      25%
                    </option>

                    <option value="50">
                      50%
                    </option>

                    <option value="75">
                      75%
                    </option>

                    <option value="100">
                      100%
                    </option>

                  </select>

                  <button
                    onClick={() =>
                      handleRemove(item._id)
                    }
                    className="w-full mt-5 bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Remove Enrollment
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}