import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Images = () => {
  const { imgUrls } = useContext(GlobalContext);

  return (
    <div
      style={{
        marginTop: "3rem",
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "2rem",
        marginRight: "2rem",
      }}
    >
      {imgUrls.length > 0 ? (
        imgUrls.map((imgUrl, index) => (
          <img
            src={imgUrl}
            alt="image"
            key={index}
            style={{
              width: "200px",
              height: "200px",
              marginRight: "1rem",
              marginBottom: "1rem",
            }}
          />
        ))
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h2>First choose image file and submit.</h2>
        </div>
      )}
    </div>
  );
};

export default Images;
