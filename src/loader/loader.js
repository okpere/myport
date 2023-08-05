import React from "react";
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { CircleLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const loader = () => {
  const [loading, setIsLoading] = useState(true);

  // Simulating a loading delay for demonstration purposes
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set the desired delay time in milliseconds
  }, []);

  return (
    <div>
      <CircleLoader
        size={150} // Adjust the size of the spinner
        color="rgba(224, 2, 105, 1)"
        background-color="rgb(39, 36, 36)"
        loading={loading}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default loader;
