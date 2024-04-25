import React, { useEffect, useState } from "react";
import ApI from "../Utility/API";
import { useNavigate } from "react-router-dom";
//for git hub check and check 15 date
//seconed check github

const Postnews = () => {
  const [load, setload] = useState(false);
  //here i will navigate to login page if there is no token on local storage
  const naviagete = useNavigate();
  const token = localStorage.getItem("token");
  const [submiting,setsubmiting]=useState(false)
  useEffect(() => {

    if (!token) {
      return naviagete("/login");
    }
    setload(true);
    ApI.checktoken(token)
      .then((data) => {
        console.log("gggg", data);
        if (data.status !== 200) {
          setload(false);
          return naviagete("/login");
        }
        setload(false);
        return;
      })
      .catch((err) => {
        setload(false);
        return naviagete("/login");
      });
  }, [token]);

  const [Uploaddatas, setUploaddatas] = useState({
    Title: "",
    description: "",
    myfile: "",
  });

  function postsender(e) {
    e.preventDefault();
    setsubmiting(true);
    if(Uploaddatas.Title==''||Uploaddatas.description=='' ||Uploaddatas.myfile ===''){
       return alert('please fill all the required filds correctlly');
    }
    
    const fd = new FormData();
    Object.entries(Uploaddatas).forEach(([key, value]) => {
      fd.append(key, value);
    });
    console.log(fd);
    ApI.addnews(fd).then((data) => {

      console.log(data);
      setsubmiting(false)
    }).catch(e=>{
      //console.log(e)  the whole error
      console.log(e.response.data); //the res.send message only
      //console.log(e.message); //error message only
      
      
    });
  }

  return load ? (
    "loding..."
  ) : (
    <div>
      <form
        className="max-w-md mx-auto mt-16 p-4 bg-white shadow rounded"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold mb-4">upload video or image</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Title
          </label>
          <input
            type="text"
            id="name"
            className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="Title"
            value={Uploaddatas.Title}
            onChange={(e) =>
              setUploaddatas((p) => ({ ...p, Title: e.target.value }))
            }
          />
          {Uploaddatas.Title==''&&submiting&&<small className="text-red-700">this field is required!</small>}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">
            Main description{" "}
          </label>
          <input
            type="text"
            id="description"
            className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="description"
            value={Uploaddatas.description}
            onChange={(e) =>
              setUploaddatas((p) => ({ ...p, description: e.target.value }))
            }
          />
          {Uploaddatas.description==''&& submiting&&<small className="text-red-700">this field is required!</small>}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            job description
          </label>
          <textarea
            id="message"
            className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="video" className="block mb-1">
            upload image or video
          </label>
          <input
            type="file"
            className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name=""
            onChange={(e) =>
              setUploaddatas((p) => ({ ...p, myfile: e.target.files[0] }))
            }
          />
          {Uploaddatas.myfile==''&&submiting&&<small className="text-red-700">this field is required!</small>}
        </div>

        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={(e) => postsender(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Postnews;
