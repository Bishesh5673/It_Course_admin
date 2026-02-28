import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const baseUrl = "http://127.0.0.1:9000/api/course";

function EditCourse() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState(state?.title || "");
  const [price, setPrice] = useState(state?.price || "");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(state?.description || "");
  const [level, setLevel] = useState(state?.level || "");
  const [date, setDate] = useState(
    state?.date ? state.date.split("T")[0] : ""
  );

  const updateCourse = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("level", level);
    formData.append("date", date);

    if (image) {
      formData.append("image", image);
    }

    let res = await fetch(
      `${baseUrl}/updateCourse/${state._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    res = await res.json();
    alert(res.message);
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center px-6 py-16">
      <form
        onSubmit={updateCourse}
        className="bg-white w-full max-w-6xl p-12 rounded-3xl shadow-2xl space-y-8"
      >
        <h1 className="text-4xl font-bold text-center mb-10">
          Edit Course
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div>
            <label className="block mb-2 font-semibold">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded-xl p-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Image (optional)</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border rounded-xl p-4 bg-gray-50"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full border rounded-xl p-4"
            >
              <option value="">Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-xl p-4"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Start Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-xl p-4"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 transition text-white py-4 rounded-xl text-xl font-semibold"
        >
          Update Course
        </button>
      </form>
    </main>
  );
}

export default EditCourse;
