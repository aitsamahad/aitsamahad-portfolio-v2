import React from "react";

const Tag = ({ techs }) => {
  return (
    <div className="tagname">
      {techs.map((tech, index) => (
        <b key={index}>&nbsp;{tech},</b>
      ))}
    </div>
  );
};

export default Tag;
