import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
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

      const { data } = await API.post("/auth/login", form);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message || "Login Failed"
      );

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 p-6">

      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-blue-700">
            🎓 LMS Login
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back! Login to continue learning.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

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
            className="w-full border rounded-lg p-3 mt-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </div>

  );

}