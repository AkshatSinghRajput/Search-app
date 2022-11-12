import Searchbar from "./Components/Searchbar";
import "./App.css";
import Ads from "./Components/Ads";
import { useContext, useEffect, useState } from "react";
import AppContext from "./Context/AppContext";
import e from "cors";

function App() {
  const context = useContext(AppContext);
  let { data } = context;
  useEffect(() => {}, [data]);

  return (
    <div className="App">
      <Searchbar />
      {data.length > 0 ? (
        <div className="container my-3">
          <div className="row">
            {data.map((ele) => {
              return (
                <div className="col-lg-3 ">
                  <Ads
                    key={ele.companyId}
                    img={ele.imageUrl}
                    headline={ele.headline}
                    primarytext={ele.primaryText}
                    description={ele.description}
                    url={ele.data.url}
                    cta={ele.CTA}
                  ></Ads>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="container my-3">
          <h1 className="display-4 text-center notfound">
            OOPS! No Ads Found!
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;
