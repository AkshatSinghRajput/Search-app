import React from "react";
import "./Ads.css";
function Ads(props) {
  return (
    <>
      <div className="card Adcard" style={{ width: "18rem" }}>
        <img
          className="card-img-top adimage"
          src={`https://drive.google.com/uc?export=view&id=${props.img}`}
          alt="Card image cap"
          draggable={false}
        />

        <div className="card-body adbody">
          <h5 className="card-title">{props.headline}</h5>
          <p className="card-text adDes">{props.primarytext}</p>
          <p className="card-text">
            <strong>Description:</strong>
            <br></br>
            <span className="adDes">{props.description}</span>
          </p>

          <a
            href={`${props.url}`}
            target="blank"
            className="btn btn-primary adButton"
          >
            {props.cta}
          </a>
        </div>
      </div>
    </>
  );
}

export default Ads;
