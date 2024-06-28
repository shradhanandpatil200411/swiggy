import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  console.log();
  return (
    <div className="error-container">
      <div className="error-text">
        <h1>{error.data}</h1>
        <h2>
          {error.status}:{error.statusText}
        </h2>
      </div>
    </div>
  );
}

export default Error;
