import React from "react";

const Logo = () => {
  return (
    <div>
      <img
        style={{ width: "70vw" }}
        src="data:image/jpeg;base64,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"
      />
    </div>
  );
};

export default Logo;
