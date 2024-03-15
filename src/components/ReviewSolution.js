import React, { useState } from "react";
import "../styles/ReviewSolution.css"; // Import your CSS file for styling
import console from "console-browserify";
import { useWeb3Contract, useMoralis } from "react-moralis";
import Upload from "../constants/Upload.json";
import { toast, ToastContainer } from "react-toastify";

function ReviewSolution() {
  const uploadAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [solution, setSolution] = useState("");

  const { runContractFunction: updateSolution } = useWeb3Contract({
    abi: Upload.abi,
    contractAddress: uploadAddress,
    functionName: "review_image",
    params: {
      _user: address,
      _url: imageUrl,
      _solution: solution,
    },
  });

  async function handleSetOnSuccess(tx) {
    await tx.wait(1);
    toast("Solution updated");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateSolution({
      onSuccess: (tx) => handleSetOnSuccess(tx),
      onError: (error) => console.log(error),
    });
    // Pass the form data to the onSubmit function
    // Clear the form fields
    console.log("User Address:", address);
    console.log("Image URL:", imageUrl);
    console.log("AI Solution:", solution);
    setAddress("");
    setImageUrl("");
    setSolution("");
  };

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
        <div className="form-group">
          <label htmlFor="solutionInput">Solution:</label>
          <textarea
            id="solutionInput"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </>
  );
}

export default ReviewSolution;
