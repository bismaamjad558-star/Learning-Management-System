import { useState } from "react";
import API from "../services/api";

export default function CreateCourse() {

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category", form.category);
      formData.append("price", form.price);

      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }

      const { data } = await API.post(
        "/course",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(data.message);

      setForm({
        title: "",
        description: "",
        category: "",
        price: "",
      });

      setThumbnail(null);
      setPreview(null);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Course Create Failed"
      );

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          📚 Create New Course
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>

            <label className="font-semibold">
              Course Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter course title"
              value={form.title}
              onChange={handleChange}
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          <div>

            <label className="font-semibold">
              Description
            </label>

            <textarea
              name="description"
              placeholder="Enter course description"
              value={form.description}
              onChange={handleChange}
              rows="5"
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
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
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
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
              placeholder="Enter course price"
              value={form.price}
              onChange={handleChange}
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

          </div>

          <div>

            <label className="font-semibold">
              Course Thumbnail
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full mt-2 border rounded-lg p-3"
            />

          </div>

          {preview && (

            <div>

              <p className="font-semibold mb-2">
                Image Preview
              </p>

              <img
                src={preview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-xl border"
              />

            </div>

          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            🚀 Create Course
          </button>

        </form>

      </div>

    </div>

  );

}