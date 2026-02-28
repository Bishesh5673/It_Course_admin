import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const baseUrl = "http://127.0.0.1:9000/api/course";
function Home() {
  const [courses, setCourses] = useState([]);
  
 const navigate= useNavigate()

  const getCourse = async () => {
    let res = await fetch(`${baseUrl}/getCourse`);
    res = await res.json();
    setCourses(res.courses);
  };

  const deleteCourse = async (id) => {
    let res = await fetch(`${baseUrl}/deleteCourse/${id}`, {
      method: "DELETE",
    });
    res = await res.json();
    console.log(res);
    alert(res.message);
    getCourse();
  };

  
  useEffect(() => {
    getCourse();
  }, []);
  return (
  <main className="min-h-screen bg-gray-100 px-6 md:px-20 py-16">

    {/* Top Section */}
    <section className="flex justify-between items-center mb-12">
      <h1 className="text-4xl font-bold">
        Course Management
      </h1>

      <NavLink
        to="/createCourse"
        className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-xl shadow-md font-semibold"
      >
        + Create Course
      </NavLink>
    </section>

    {/* Table Section */}
    <section className="bg-white rounded-3xl shadow-xl overflow-hidden">

      {courses?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">

            <thead className="bg-gray-800 text-white text-lg">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item._id.slice(-6)}
                  </td>

                  <td className="px-6 py-4">
                    <img
                      src={`http://localhost:9000/image/${item?.image}`}
                      alt="Course"
                      className="w-20 h-14 object-cover rounded-lg shadow"
                    />
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {item.title}
                  </td>

                  <td className="px-6 py-4 text-green-600 font-semibold">
                    Rs. {item.price}
                  </td>

                  <td className="px-6 py-4 text-center space-x-3">
                    <button
                      onClick={() => deleteCourse(item._id)}
                      className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() =>
                        navigate("/editCourse", { state: item })
                      }
                      className="bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      ) : (
        <div className="text-center py-20 text-xl text-gray-500">
          No Courses Found
        </div>
      )}

    </section>

  </main>
);

}

export default Home;
