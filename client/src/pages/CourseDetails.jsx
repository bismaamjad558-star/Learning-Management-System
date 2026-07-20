import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

export default function CourseDetails() {

  const { id } = useParams();

  const [course, setCourse] = useState(null);

  useEffect(() => {

    fetchCourse();

  }, [id]);

  const fetchCourse = async () => {

    try {

      const { data } = await API.get(`/course/${id}`);

      setCourse(data.course);

    } catch (error) {

      console.log(error);

    }

  };

  const handleEnroll = async () => {

    try {

      const token = localStorage.getItem("token");

      const { data } = await API.post(
        "/enrollment/enroll",
        {
          courseId: course._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Enrollment Failed"
      );

    }

  };

  if (!course) {

    return (

      <div className="flex justify-center items-center h-screen">

        <h2 className="text-3xl font-bold">
          Loading...
        </h2>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Course Image */}

        <img
          src={`http://localhost:5000/uploads/${course.thumbnail}`}
          alt={course.title}
          className="w-full h-96 object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x500?text=Course+Image";
          }}
        />

        <div className="p-8">

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            {course.category}
          </span>

          <h1 className="text-4xl font-bold mt-5">
            {course.title}
          </h1>

          <p className="text-gray-600 mt-5 leading-8 text-lg">
            {course.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-gray-50 p-6 rounded-xl">

              <h3 className="font-bold text-xl">
                👨‍🏫 Instructor
              </h3>

              <p className="mt-3 text-gray-600">
                {course.instructor?.name || "N/A"}
              </p>

            </div>

            <div className="bg-gray-50 p-6 rounded-xl">

              <h3 className="font-bold text-xl">
                💰 Course Price
              </h3>

              <p className="mt-3 text-3xl font-bold text-green-600">
                Rs. {course.price}
              </p>

            </div>

          </div>

          <button
            onClick={handleEnroll}
            className="w-full mt-10 bg-blue-600 text-white py-4 rounded-xl text-xl font-bold hover:bg-blue-700 transition duration-300"
          >
            🎓 Enroll Now
          </button>

        </div>

      </div>

    </div>

  );

}