import React, { useState } from "react";
import "../styles/ScientistDisplayImages.css";
import Upload from "../constants/Upload.json";
import { useWeb3Contract } from "react-moralis";
import console from "console-browserify";

function ScientistDisplayImages() {
  const [img, setImg] = useState([]);
  const uploadAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

  const {
    runContractFunction: fetch,
    data,
    isFetching,
  } = useWeb3Contract({
    abi: Upload.abi,
    contractAddress: uploadAddress,
    functionName: "get_images",
  });

  const fetchData1 = async () => {
    await fetch();
    if (isFetching) {
      console.log("its fetching");
    }
    if (data) {
      console.log(data);
      setImg(data);
    }
  };

  const fetchData2 = async () => {
    try {
      // Fetch data 2 logic goes here
    } catch (error) {
      console.error("Error fetching data 2:", error);
    }
  };

  const renderImages = () => {
    return img.map((item, i) => (
      <div className="card" key={`a-${i}`}>
        <a href={item} target="_blank" rel="noopener noreferrer">
          <img src={item} alt={`Image ${i}`} className="image-list" />
        </a>
        <div className="card-content">
          <p>{item}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="fetch-buttons-container">
      <button className="fetch-button" onClick={fetchData1}>
        Open Images
      </button>
      <button className="fetch-button" onClick={fetchData2}>
        Fetch Data 2
      </button>
      <div className="card-container">
        {isFetching ? (
          <p>Loading...</p>
        ) : img && img.length > 0 ? (
          renderImages()
        ) : (
          <p>No images fetched yet</p>
        )}
      </div>
    </div>
  );
}

export default ScientistDisplayImages;
