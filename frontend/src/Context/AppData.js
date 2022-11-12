import { useState, useEffect } from "react";
import AppContext from "./AppContext";
import axios from "../Axios/axios";
const AppData = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    searchData("");
  }, []);
  const searchData = async (q) => {
    const result = await axios
      .post("/api/search", {
        query: q,
      })
      .catch((err) => {
        console.log(err.response);
      });
    let extracted = result.data.data;
    setData(extracted);
  };
  return (
    <AppContext.Provider value={{ data, searchData }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppData;
