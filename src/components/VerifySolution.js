import React, { useState } from "react";
import "../styles/VerifySolution.css"; // Import your CSS file for styling
import { useWeb3Contract } from "react-moralis";
import Upload from "../constants/Upload.json";
import console from "console-browserify";
import { toast, ToastContainer } from "react-toastify";

function VerifySolution() {
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const uploadAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

  const { runContractFunction: verifySolution } = useWeb3Contract({
    abi: Upload.abi,
    contractAddress: uploadAddress,
    functionName: "verify_image",
    params: {
      _url: imageUrl,
      _user: address,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await verifySolution({
      onSuccess: (tx) => handleSetOnSuccess(tx),
      onError: (error) => console.log(error),
    });
  };

  async function handleSetOnSuccess(tx) {
    await tx.wait(1);

    toast("solution verified");
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="addressInput">Address:</label>
          <input
            type="text"
            id="addressInput"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrlInput">Image URL:</label>
          <input
            type="text"
            id="imageUrlInput"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </>
  );
}

export default VerifySolution;
