import React, { useContext, useState } from "react";
import { LanguageContext } from "../components/contextprovider/Language";

const Notification = () => {
  const [load, setload] = useState(false);
  const { contextData } = useContext(LanguageContext);
  console.log("i thing you are in o" + contextData.Language);
  const [Uploaddatas, setUploaddatas] = useState({
    Title: "",
    description: "",
  });

  return load ? (
    "loding..."
  ) : (
    <div>
      <form
        className="max-w-md mx-auto mt-16 p-4 bg-white shadow rounded"
        encType="multipart/form-data"
      >
        {contextData.Language == "English" ? "  new notifications" : "ሓዱሽ ሓበሬታ"}
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

export default Notification;
