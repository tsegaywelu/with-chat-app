import axios from "axios";

// const URL = "http://localhost:2300"
const URL = "http://localhost:3000";

const API_SERVICE = axios.create({
  baseURL: URL,
  timeout: 5000,
});

const ApI = {
  addnews: async (data) => {
    //from postnews.jsx title,description,myfile
    return API_SERVICE.post("/addnews", data, {
      headers: { auth: `bearer ${localStorage.getItem("token")}` },
    });
  },
  addevent: async (data) => {
    //from postnews.jsx title,description,myfile
    return API_SERVICE.post("/addevent", data, {
      headers: { auth: `bearer ${localStorage.getItem("token")}` },
    });
  },
  getevents:async()=>{
    return API_SERVICE.get('/getevents')

  },

  getnews: async () => {
    return API_SERVICE.get("/getnews");
  },
  Registeruser: async (data) => {
    //from resgister.jsx  email,password,name of user
    return API_SERVICE.post("/registeruser", data);
  },
  Loginuser: async (data) => {
    return API_SERVICE.post("/loginuser", data);
  },
  checktoken: async (data) => {
    return API_SERVICE.post("/checktoken", { data });
  },
  messagesending:async (data)=>{
    return  API_SERVICE.post('/recivemessage',data)
  }
};

export default ApI;
