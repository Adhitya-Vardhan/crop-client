// FarmerDisplayImages.js
import {
  useWeb3Contract,
  useMoralis,
  useWeb3ExecuteFunction,
} from "react-moralis";
import Upload from "../constants/Upload.json";
import React, { useState } from "react";
import "../styles/FarmerDisplayImages.css"; // Import your CSS file for styling
import console from "console-browserify";

function FarmerDisplayImages() {
  const { account } = useMoralis();
  const uploadAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const [img, setImg] = useState("");

  const {
    runContractFunction: fetch,
    data,
    isFetching,
  } = useWeb3Contract({
    abi: Upload.abi,
    contractAddress: uploadAddress,
    functionName: "display_pending",
    params: { _user: account },
  });

  const fetchImages1 = async () => {
    await fetch();
    if (isFetching) {
      console.log("its fetching");
    }
    if (data) {
      console.log(data);
      setImg(data);
    }
  };

  const fetchImages2 = async () => {
    try {
      // Fetch images from the second API endpoint
      const response = await fetch("https://example.com/api/images2");
      const data = await response.json();
      setImg(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const fetchImages3 = async () => {
    try {
      // Fetch images from the third API endpoint
      const response = await fetch("https://example.com/api/images3");
      const data = await response.json();
      setImg(data);
    } catch (error) {
      console.error("Error fetching images:", error);
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
    <div className="image-gallery">
      <div className="button-container">
        <button className="fetch-button" onClick={fetchImages1}>
          Fetch Images 1
        </button>
        <button className="fetch-button" onClick={fetchImages2}>
          Fetch Images 2
        </button>
        <button className="fetch-button" onClick={fetchImages3}>
          Fetch Images 3
        </button>
      </div>
      <div className="image-container">
        {img.length > 0 ? renderImages() : <p>No images fetched yet</p>}
      </div>
    </div>
  );
}

export default FarmerDisplayImages;
