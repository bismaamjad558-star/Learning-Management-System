import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Learn Without Limits 🚀
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
            Build your future with our modern Learning Management System.
            Learn React, Node.js, Express, MongoDB and become a professional
            MERN Stack Developer through real-world projects.
          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">

            <Link
              to="/courses"
              className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              📚 Explore Courses
            </Link>

            <Link
              to="/register"
              className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition"
            >
              🚀 Get Started
            </Link>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-600">500+</h2>
            <p className="mt-2 text-gray-600">Students</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h2 className="text-4xl font-bold text-green-600">100+</h2>
            <p className="mt-2 text-gray-600">Courses</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h2 className="text-4xl font-bold text-purple-600">20+</h2>
            <p className="mt-2 text-gray-600">Instructors</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h2 className="text-4xl font-bold text-red-600">95%</h2>
            <p className="mt-2 text-gray-600">Success Rate</p>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose Our LMS?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold mb-3">
                Expert Instructors
              </h3>
              <p className="text-gray-600">
                Learn from experienced professionals with practical industry knowledge.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-3">
                Project Based Learning
              </h3>
              <p className="text-gray-600">
                Build real-world MERN projects and strengthen your portfolio.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3">
                Career Growth
              </h3>
              <p className="text-gray-600">
                Improve your skills and prepare yourself for internships and jobs.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Start Learning?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Join thousands of learners and begin your MERN Stack journey today.
          </p>

          <Link
            to="/courses"
            className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Browse Courses
          </Link>

        </div>

      </section>

    </div>
  );
}