// FormWithFetch.js

import React, { useState } from "react";
import "../styles/FarmerFinalOutput.css"; // Import your CSS file for styling
import console from "console-browserify";

function FarmerFinalOutput() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://example.com/api/search?q=${inputValue}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchInput">Search:</label>
        <input
          type="text"
          id="searchInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {data && (
        <div className="card">
          <img src={data.image} alt="Image" />
          <div className="card-content">
            <p>Owner: {data.owner}</p>
            <p>Reviews: {data.reviews}</p>
            <p>AI Solution: {data.aiSolution}</p>
            <p>Reviewed Solution: {data.reviewedSolution}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FarmerFinalOutput;
