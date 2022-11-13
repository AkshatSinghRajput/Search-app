import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import "./Searchbar.css";
function Searchbar() {
  const context = useContext(AppContext);
  let { searchData } = context;
  const [query, setQuery] = useState("");
  const clicked = (e) => {
    e.preventDefault();
    searchData(query);
  };
  return (
    <>
      <h3 className="display-3 text-center textHead">
        Search For the<span className="span1">Ads</span>{" "}
      </h3>
      <div className="input-group container searchbar">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          name="query"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          required={true}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={clicked}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </>
  );
}

export default Searchbar;
