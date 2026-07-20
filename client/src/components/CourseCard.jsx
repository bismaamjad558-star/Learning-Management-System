import { Link } from "react-router-dom";
import API from "../services/api";

export default function CourseCard({ course }) {

  const user = JSON.parse(localStorage.getItem("user"));

  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {

      const token = localStorage.getItem("token");

      const { data } = await API.delete(
        `/course/${course._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message);

      window.location.reload();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Delete Failed"
      );

    }

  };

  return (

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Course Image */}
      <img
        src={
          course.thumbnail
            ? `http://localhost:5000/uploads/${course.thumbnail}`
            : "https://via.placeholder.com/600x350?text=No+Image"
        }
        alt={course.title}
        className="w-full h-56 object-cover"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/600x350?text=No+Image";
        }}
      />

      <div className="p-5">

        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
          {course.category}
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-4">
          {course.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-3 line-clamp-3">
          {course.description}
        </p>

        {/* Instructor */}
        <p className="mt-4 text-gray-700">
          👨‍🏫 <span className="font-semibold">Instructor:</span>{" "}
          {course.instructor?.name || "N/A"}
        </p>

        {/* Price */}
        <div className="mt-5 flex justify-between items-center">

          <span className="text-2xl font-bold text-green-600">
            Rs. {course.price}
          </span>

        </div>

        {/* Buttons */}
        <div className="mt-6 space-y-3">

          <Link
            to={`/courses/${course._id}`}
            className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </Link>

          {user?.role === "instructor" && (
            <>
              <Link
                to={`/edit-course/${course._id}`}
                className="block text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Edit Course
              </Link>

              <button
                onClick={handleDelete}
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
              >
                Delete Course
              </button>
            </>
          )}

        </div>

      </div>

    </div>

  );

}