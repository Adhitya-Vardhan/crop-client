import React from "react";

function Explanation() {
  return (
    <div className="explanation">
      <h2>How it Works</h2>
      <div className="explanation-card">
        <img src="../images/upload.png" alt="Upload Icon" />
        <h3>1. Upload Plant Image</h3>
        <p>
          Take a picture of your plant and upload it securely to the IPFS
          network.
        </p>
      </div>
      <div className="explanation-card">
        <img src="../images/scientist.png" alt="AI Icon" />
        <h3>2. AI Analysis</h3>
        <p>
          Our advanced AI model analyzes the image to identify potential
          diseases.
        </p>
      </div>
      <div className="explanation-card">
        <img src="path/to/scientist-icon.svg" alt="Scientist Icon" />
        <h3>3. Scientist Review</h3>
        <p>
          Experienced scientists review the AI results for additional accuracy.
        </p>
      </div>
      <div className="explanation-card">
        <img src="path/to/community-icon.svg" alt="Community Icon" />
        <h3>4. Community Verification</h3>
        <p>
          The solution is shared with other scientists for verification and
          enhanced accuracy.
        </p>
      </div>
      <div className="explanation-card">
        <img src="path/to/diagnosis-icon.svg" alt="Diagnosis Icon" />
        <h3>5. Diagnosis & Solution</h3>
        <p>
          You receive a confirmed diagnosis and recommended treatment options.
        </p>
      </div>
    </div>
  );
}

export default Explanation;
