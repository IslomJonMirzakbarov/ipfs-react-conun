import { create } from "ipfs-http-client";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
global.Buffer = global.Buffer || require("buffer").Buffer;

const client = create("https://ipfs.infura.io:5001/api/v0");

const Header = () => {
  const [imgFile, setImgFile] = useState(null);
  const { addImageUrl } = useContext(GlobalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const created = await client.add(imgFile);
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;
      addImageUrl(url);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setImgFile(Buffer(reader.result));
    };
  };

  return (
    <div style={{ margin: "3rem 0" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          style={{
            padding: "5px",
            fontSize: "1.1rem",
            border: "1px solid grey",
            marginRight: "1rem",
            backgroundColor: "grey",
            color: "white",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{ fontSize: "1.1rem", marginLeft: "1rem" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Header;
