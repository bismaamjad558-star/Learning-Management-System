import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function EditCourse() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {

    try {

      const { data } = await API.get(`/course/${id}`);

      const course = data.course;

      setForm({
        title: course.title,
        description: course.description,
        category: course.category,
        price: course.price,
      });

    } catch (error) {
      console.log(error);
    }

  };

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      const { data } = await API.put(
        `/course/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message);

      navigate("/courses");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Update Failed"
      );

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          ✏️ Update Course
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>

            <label className="font-semibold">
              Course Title
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Course Title"
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
              required
            />

          </div>

          <div>

            <label className="font-semibold">
              Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="5"
              placeholder="Course Description"
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
              required
            />

          </div>

          <div>

            <label className="font-semibold">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
              required
            >
              <option value="">Select Category</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Full Stack">Full Stack</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Programming">Programming</option>
            </select>

          </div>

          <div>

            <label className="font-semibold">
              Price (PKR)
            </label>

            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Course Price"
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            💾 Update Course
          </button>

        </form>

      </div>

    </div>

  );

}