import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:9000/api/enroll";

function Enrollments() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${baseUrl}/admin/enrollments`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {

          // remove duplicate users
          const uniqueUsers = [];

          data.enrollments.forEach((item) => {
            const exists = uniqueUsers.find(
              (u) => u._id === item.userId._id
            );

            if (!exists) {
              uniqueUsers.push(item.userId);
            }
          });

          setUsers(uniqueUsers);
        }
      });
  }, []);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-10">
        Enrolled Users
      </h1>

      <div className="grid grid-cols-4 gap-8">

        {users.map((user) => (

          <div
            key={user._id}
            onClick={() =>
              navigate(`/admin/user/${user._id}`, { state: user })
            }
            className="cursor-pointer bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition"
          >

            <img
              src={`http://localhost:9000/image/${user.image}`}
              alt={user.username}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />

            <h2 className="text-lg font-semibold">
              {user.username}
            </h2>

            <p className="text-gray-500 text-sm">
              {user.email}
            </p>

          </div>

        ))}

      </div>
    </div>
  );
}

export default Enrollments;
