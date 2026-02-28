import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const baseUrl = "http://127.0.0.1:9000/api/course";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [date, setDate] = useState("");

 const navigate= useNavigate()


  const createCourse = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("level", level);
    formData.append("date", date);
    // Api call
    let res = await fetch(`${baseUrl}/createCourse`, {
      method: "POST",
      body: formData,
    });
    res = await res.json();
    console.log(res);
    alert(res.message);
    navigate('/')
  };
  return (
  <main className="min-h-screen bg-gray-100 flex justify-center items-center px-6 py-16">

  <form
    onSubmit={createCourse}
    className="bg-white w-full max-w-6xl p-12 rounded-3xl shadow-2xl space-y-8"
  >
    <h1 className="text-4xl font-bold text-center mb-10">
      Create New Course
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Title */}
      <div>
        <label className="block mb-2 font-semibold">Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter course title"
          className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none rounded-xl p-4 transition"
        />
      </div>

      {/* Price */}
      <div>
        <label className="block mb-2 font-semibold">Price</label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
          className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none rounded-xl p-4 transition"
        />
      </div>

      {/* Image */}
      <div>
        <label className="block mb-2 font-semibold">Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full border border-gray-300 rounded-xl p-4 bg-gray-50 cursor-pointer"
        />
      </div>

      {/* Level */}
      <div>
        <label className="block mb-2 font-semibold">Level</label>
        <select
          onChange={(e) => setLevel(e.target.value)}
          className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none rounded-xl p-4 transition"
        >
          <option value="">Select Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

    </div>

    {/* Description full width */}
    <div>
      <label className="block mb-2 font-semibold">Description</label>
      <textarea
        rows="5"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter course description"
        className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none rounded-xl p-4 transition resize-none"
      />
    </div>

    {/* Date */}
    <div>
      <label className="block mb-2 font-semibold">Start Date</label>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none rounded-xl p-4 transition"
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-xl text-xl font-semibold shadow-md"
    >
      Create Course
    </button>

  </form>

</main>

);

}

export default CreateCourse;
