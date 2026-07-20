import { useNavigate } from "react-router-dom";

export default function Profile() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logout Successful");

    navigate("/login");

  };

  if (!user) {

    return (

      <div className="flex justify-center items-center h-screen">

        <h2 className="text-2xl font-bold text-red-600">
          No user found. Please login first.
        </h2>

      </div>

    );

  }

  return (

    <div className="bg-gray-100 min-h-screen">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-14">

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">

          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff&size=200`}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg"
          />

          <div>

            <h1 className="text-5xl font-bold">
              {user.name}
            </h1>

            <p className="mt-3 text-lg text-blue-100">
              {user.role.toUpperCase()}
            </p>

            <p className="mt-2">
              {user.email}
            </p>

          </div>

        </div>

      </div>

      {/* Profile Card */}

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            👤 Account Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-gray-50 p-5 rounded-xl">

              <p className="text-gray-500">
                Full Name
              </p>

              <h3 className="text-xl font-bold mt-2">
                {user.name}
              </h3>

            </div>

            <div className="bg-gray-50 p-5 rounded-xl">

              <p className="text-gray-500">
                Email Address
              </p>

              <h3 className="text-xl font-bold mt-2">
                {user.email}
              </h3>

            </div>

            <div className="bg-gray-50 p-5 rounded-xl">

              <p className="text-gray-500">
                Role
              </p>

              <h3 className="text-xl font-bold mt-2 text-blue-600">
                {user.role}
              </h3>

            </div>

            <div className="bg-gray-50 p-5 rounded-xl">

              <p className="text-gray-500">
                User ID
              </p>

              <h3 className="text-sm break-all mt-2">
                {user._id}
              </h3>

            </div>

          </div>

          <button
            onClick={handleLogout}
            className="mt-10 w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition"
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  );

}