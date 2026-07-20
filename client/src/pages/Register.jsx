import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const { data } = await API.post("/auth/register", form);

      alert(data.message);

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-6">

      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-blue-700">
            🎓 Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join our Learning Management System today.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <label className="font-semibold">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full border rounded-lg p-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />

          <label className="font-semibold">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg p-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />

          <label className="font-semibold">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full border rounded-lg p-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />

          <label className="font-semibold">
            Register As
          </label>

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>

  );

}