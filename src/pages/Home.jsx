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
    getProduct();
  };

  
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <main>
      <section  className="  p-10  text-right" >
        <NavLink   className=' bg-amber-400 p-5 mt-4   text-3xl font-bold underline'  to='/createCourse'  >Create Course</NavLink>
      </section>

      <section className="  font-serif text-2xl  product_List  p-10  text-center ">
        <div>
          <h1 className="text-5xl underline my-5">Course List</h1>
        </div>
        <div className=" p-5 flex justify-center">
          {courses?.length > 0 ? (
            <div className="">
              <table className=" ">
                <thead>
                  <tr className="border">
                    <th className="border   p-5 w-44 bg-gray-500 text-white  font-bold text-2xl  ">
                      Id
                    </th>
                    <th className="border   p-5 w-44 bg-gray-500 text-white  font-bold text-2xl  ">
                      Image
                    </th>
                    <th className="border   p-5 w-44 bg-gray-500 text-white  font-bold text-2xl  ">
                      Title
                    </th>
                    <th className="border   p-5 w-44 bg-gray-500 text-white  font-bold text-2xl  ">
                      Price
                    </th>
                    <th className="border   p-5 w-44 bg-gray-500 text-white  font-bold text-2xl  ">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courses?.map((item) => {
                    return (
                      <tr key={item._id} className="bg-gray-100  border ">
                        <td className="p-5       text-black text-md   w-44">
                          {item._id}
                        </td>
                        <td className="p-5       text-black text-md   w-44">
                          <img
                            width={90}
                            src={`http://localhost:9000/image/${item?.image}`}
                            alt="Product_image"
                          />
                        </td>
                        <td className="p-5      text-black text-md   w-44">
                          {item.title}
                        </td>
                        <td className="p-5   text-black text-md   w-44">
                          Rs.{item.price}
                        </td>
                        <td className=" space-x-3  ">
                          <button
                            onClick={() => {
                              deleteCourse(item._id);
                            }}
                            className="bg-red-500 p-2 text-white rounded-xl  w-20  "
                          >
                            Delete
                          </button>
                          <button 

                          onClick={()=>{
                            navigate('/editCourse',{state:item})

                          }}
                          
                          
                          className="bg-orange-500 p-2 text-white rounded-xl  w-20  ">
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <h1> Course Not Found</h1>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
