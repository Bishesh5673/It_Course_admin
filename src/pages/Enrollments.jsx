import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const baseUrl = "http://localhost:9000/api/enroll";
function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/admin/enrollments`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setEnrollments(data.enrollments);
        }
      });
  }, []);

  return (
    <div>
      <table className="w-full bg-white shadow-xl rounded-xl">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4">User</th>
            <th>Email</th>
            <th>Course</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {enrollments.map((item) => (
            <tr key={item._id} className="border-t">
              <td className="p-4">{item.userId?.username}</td>

              <td>{item.userId?.email}</td>

              <td>{item.courseId?.title}</td>

              <td>Rs. {item.courseId?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Enrollments;
