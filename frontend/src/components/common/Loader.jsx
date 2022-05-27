import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading-container">
      <div className="loading-inner">
        <div className="loading-content">
          <ScaleLoader loading={isLoading} color="#F5C518" />
        </div>
      </div>
    </div>
  );
};

export default Loader;