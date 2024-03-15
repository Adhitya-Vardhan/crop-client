// BlockchainForm.js

import React, { useState } from "react";
import "../styles/AddFarmer.css"; // Import your CSS file for styling
import { useWeb3Contract, useMoralis } from "react-moralis";
import console from "console-browserify";
import Upload from "../constants/Upload.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddFarmer() {
  const [address, setAddress] = useState("");
  const [aadhar, setAadhar] = useState("");

  const uploadAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const { runContractFunction: addFarmer } = useWeb3Contract({
    abi: Upload.abi,
    contractAddress: uploadAddress,
    functionName: "add_farmer",
    params: { _farmer: address, _adhar_id: aadhar },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addFarmer({
      onSuccess: (tx) => handleSetOnSuccess(tx),
      onError: (error) => console.log(error),
    });
  };

  async function handleSetOnSuccess(tx) {
    await tx.wait(1);

    toast("Farmer added");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="addressInput">Address:</label>
        <input
          type="text"
          id="addressInput"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="idInput">ID:</label>
        <input
          type="text"
          id="idInput"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
        />
        <button type="submit">Add Farmer to Blockchain</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddFarmer;
