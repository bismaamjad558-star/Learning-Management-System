import { useEffect, useState } from "react";
import API from "../services/api";
import CourseCard from "../components/CourseCard";

export default function Courses() {

  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    filterCourses();
  }, [search, category, sort, courses]);

  const fetchCourses = async () => {

    try {

      const { data } = await API.get("/course");

      setCourses(data.courses);
      setFilteredCourses(data.courses);

    } catch (error) {

      console.log(error);

    }

  };

  const filterCourses = () => {

    let result = [...courses];

    // Search
    if (search) {

      result = result.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
      );

    }

    // Category
    if (category !== "All") {

      result = result.filter(
        (course) => course.category === category
      );

    }

    // Sort
    if (sort === "low") {

      result.sort((a, b) => a.price - b.price);

    }

    if (sort === "high") {

      result.sort((a, b) => b.price - a.price);

    }

    setFilteredCourses(result);

  };

  return (

    <div className="bg-gray-100 min-h-screen p-8">

      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        📚 Explore Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mb-10">

        <input
          type="text"
          placeholder="🔍 Search Course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl p-3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-xl p-3"
        >
          <option>All</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Full Stack</option>
          <option>Programming</option>
          <option>UI/UX</option>
          <option>Mobile App</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-xl p-3"
        >
          <option value="">Sort By</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>

      </div>

      {filteredCourses.length === 0 ? (

        <div className="text-center text-2xl font-bold text-gray-500">
          No Courses Found 😔
        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredCourses.map((course) => (

            <CourseCard
              key={course._id}
              course={course}
            />

          ))}

        </div>

      )}

    </div>

  );

}