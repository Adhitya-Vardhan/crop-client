import React, { useState } from "react";
import "../styles/GetAiSolution.css"; // Import your CSS file for styling
import console from "console-browserify";
import { useWeb3Contract, useMoralis } from "react-moralis";
import Upload from "../constants/Upload.json";

function GetAiSolution() {
  const [url, setUrl] = useState("");
  const [output, setOutput] = useState("");
  const uploadAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

  const { runContractFunction: fetch, data } = useWeb3Contract({
    abi: Upload.abi,
    contractAddress: uploadAddress,
    functionName: "display_open_output",
    params: {
      _url: url,
    },
  });

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleButtonClick = async (event) => {
    event.preventDefault();
    await fetch();
    console.log("Fetching in process ");
    if (data) {
      console.log(data);
    }
  };

  return (
    <div className="text-input-container">
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="Enter text here"
      />
      <button onClick={handleButtonClick}>Process Text</button>
      {data && (
        <div className="card">
          <img src={data.imageUrl} className="card-img" />
          <div className="card-body">
            <h5 className="card-title"> image info </h5>
            <p className="card-text"> owner : {data.owner}</p>
            <br />
            <p className="card-text">AI-solution:{data.AI_sol}</p>
            <br />
            <p></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetAiSolution;
