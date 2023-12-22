import React from "react";

const Sample = ({ bg, text }: { bg: string; text: string }) => {
  return (
    <div data-testid="sample" style={{ backgroundColor: bg, padding: "10px" }}>
      {text}
    </div>
  );
};

export default Sample;
