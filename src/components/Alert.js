import React from "react";

export const Alert = ({ alertText }) => {
  return (
    <div className="alert alert-warning" role="alert">
      {alertText}
    </div>
  );
};
