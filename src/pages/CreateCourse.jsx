import { useState } from "react";
const baseUrl = "http://127.0.0.1:9000/api/course";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [date, setDate] = useState("");


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
  };
  return (
    <div>
      <section  className="flex justify-center items-center" >
        <form
          onSubmit={(e) => {
            createCourse(e);
          }}
          className="  ml-96  flex flex-col text-xl  font-serif  gap-y-5  items-center w-[600px]  p-10 m-auto mt-10 shadow-2xl shadow-black  rounded-2xl "
        >
          <div className="w-full">
            <label htmlFor="title">
              Title:
              <br />
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="border outline-none rounded-2xl p-3 w-full"
                type="text"
                id="title"
                placeholder="Enter Product title"
              />
            </label>
          </div>

          <div className="w-full">
            <label htmlFor="price">
              Price:
              <br />
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                className="border outline-none rounded-2xl p-3 w-full"
                type="number"
                id="price"
                placeholder="Enter Product price"
              />
            </label>
          </div>
          <div className="w-full">
            <label htmlFor="image">
              Image:
              <br />
              <input
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                className="border outline-none rounded-2xl p-3 w-full"
                type="file"
                id="image"
                placeholder="Enter Product image"
              />
            </label>
          </div>

          <div className="w-full">
            <label htmlFor="description">
              Description:
              <br />
              <input
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="border outline-none rounded-2xl p-3 w-full"
                type="text"
                id="description"
                placeholder="Enter Course description"
              />
            </label>
          </div>

          <div className="w-full">
            <label htmlFor="level">
              Level:
              <br />
              <input
                onChange={(e) => {
                  setLevel(e.target.value);
                }}
                className="border outline-none rounded-2xl p-3 w-full"
                type="text"
                id="level"
                placeholder="Enter level"
              />
            </label>
          </div>

          <div className="w-full">
            <label htmlFor="date">
              Date:
              <br />
              <input
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                className="border outline-none rounded-2xl p-3 w-full"
                type="date"
                id="date"
                placeholder="Enter date"
              />
            </label>
          </div>

          <div className="w-full">
            <button className="border  rounded-2xl bg-orange-600  text-white text-2xl font-serif p-4 w-full">
              Create Course
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CreateCourse;
