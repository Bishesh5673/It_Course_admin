import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = "http://localhost:9000/api/enroll";

function AdminUserCourses() {

  const { id } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {

    fetch(`${baseUrl}/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCourses(data.enrollments);
        }
      });

  }, []);

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Enrolled Courses
      </h1>

      <div className="grid grid-cols-3 gap-8">

        {courses.map((item) => (

          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >

            <img
              src={`http://localhost:9000/image/${item.courseId.image}`}
              className="w-full h-40 object-cover"
            />

            <div className="p-5">

              <h2 className="text-xl font-semibold">
                {item.courseId.title}
              </h2>

              <p className="text-gray-500 mt-2">
                Rs. {item.courseId.price}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default AdminUserCourses;
