// ScientistForm.js

import React, { useState } from "react";
import Upload from "../constants/Upload.json";
import { useWeb3Contract, useMoralis } from "react-moralis";
import "../styles/AddScientist.css"; // Import your CSS file for styling
import console from "console-browserify";
import { toast, ToastContainer } from "react-toastify";

function AddScientist() {
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");
  const [aadharId, setAadharId] = useState("");

  const uploadAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const { runContractFunction: addScientist } = useWeb3Contract({
    abi: Upload.abi,
    contractAddress: uploadAddress,
    functionName: "add_scientist",
    params: {
      _scientist: address,
      _adhar_id: aadharId,
      _scientist_id: id,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addScientist({
      onSuccess: (tx) => handleSetOnSuccess(tx),
      onError: (error) => console.log(error),
    });
  };

  async function handleSetOnSuccess(tx) {
    await tx.wait(1);

    toast("Scientist Added");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Address:</label>
        <input
          type="text"
          id="nameInput"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="idInput">ID:</label>
        <input
          type="text"
          id="idInput"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="aadharIdInput">Aadhar ID:</label>
        <input
          type="text"
          id="aadharIdInput"
          value={aadharId}
          onChange={(e) => setAadharId(e.target.value)}
        />
        <button type="submit">Add Scientist to Blockchain</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddScientist;
