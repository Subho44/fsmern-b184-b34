import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function ViewCourse() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSingleCourse = async () => {
    try {
      const res = await axios.get(`http://localhost:5600/api/courses/${id}`);
      setCourse(res.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleCourse();
  }, [id]);

  

  if (!course) {
    return (
      <h2 className="text-center text-red-500 text-2xl mt-10">
        Course Not Found
      </h2>
    );
  }

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          {course.title}
        </h2>

        <p className="text-gray-500 mb-2">Course ID:</p>
        <p className="text-sm bg-gray-100 p-3 rounded mb-4 break-all">
          {course._id}
        </p>

        <h3 className="text-green-600 text-2xl font-bold mb-6">
          ₹ {course.price}
        </h3>

        <div className="flex gap-3">
          <Link
            to={`/edit/${course._id}`}
            className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600"
          >
            Edit
          </Link>

          <Link
            to="/"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewCourse;