// Form.js
import { useWeb3Contract, useMoralis } from "react-moralis";
import React, { useState } from "react";
import "../styles/ImageUpload.css"; // Import your CSS file for styling
import console from "console-browserify";
import Upload from "../constants/Upload.json";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function ImageUpload() {
  const { account } = useMoralis();
  const uploadAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [imageHash, setImageHash] = useState(null);
  const [solution, setSolution] = useState(null);

  async function handleSetOnSuccess(tx) {
    await tx.wait(1);
  }

  const { runContractFunction: uploadImage } = useWeb3Contract({
    abi: Upload.abi,
    contractAddress: uploadAddress,
    functionName: "upload_image",
    params: { _user: account, _url: imageHash },
  });

  const { runContractFunction: aiSolution } = useWeb3Contract({
    abi: Upload.abi,
    contractAddress: uploadAddress,
    functionName: "AI_solution",
    params: {
      _url: imageHash,
      _solution: solution,
    },
  });

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const data = event.target.files[0];
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(data);
      reader.onloadend = () => {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
      };
    } else {
      console.log("please select a file");
    }

    event.preventDefault();
  };

  const handleUpload = async (event) => {
    // Logic to upload the file
    event.preventDefault();

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: "52c2e9f0e59846e80927",
            pinata_secret_api_key:
              "bc869ae6130a81c990a528cd3ea09f502be39d9164cc1c1a576406cd3429c203",
            "content-Type": "multipart/form-data",
          },
        });

        var hash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        setImageHash(hash);

        var sol = "this is a plant and this has a disesase named x ";
        setSolution(sol);
        toast("File Uploaded");
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleGetLink = async (event) => {
    event.preventDefault();
    await uploadImage({
      onSuccess: (tx) => handleSetOnSuccess(tx),
      onError: (error) => console.log(error),
    });

    toast("Added to chain");
  };

  const handleConfirm = async (event) => {
    event.preventDefault();
    await aiSolution({
      onSuccess: (tx) => handleSetOnSuccess(tx),
      onError: (error) => console.log(error),
    });

    toast("successfully completed");
  };

  return (
    <div className="form-container">
      <h2>Upload File and Confirm Transaction</h2>
      <input type="file" onChange={handleFileChange} />
      <div className="buttons-container">
        <button className="upload-button" onClick={handleUpload}>
          Upload File
        </button>
        <button className="get-link-button" onClick={handleGetLink}>
          Add to chain
        </button>
        <button className="confirm-button" onClick={handleConfirm}>
          Confirm Transaction
        </button>
      </div>

      {imageHash && (
        <p>
          File Link:{" "}
          <a href={imageHash} target="_blank" rel="noopener noreferrer">
            {imageHash}
          </a>
        </p>
      )}
      <ToastContainer />
    </div>
  );
}

export default ImageUpload;
