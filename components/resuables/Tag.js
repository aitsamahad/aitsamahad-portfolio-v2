import React from "react";

const Tag = ({ techs }) => {
  return (
    <div className="tagname">
      {techs.map(tech => (
        <b>&nbsp;{tech},</b>
      ))}
    </div>
  );
};

export default Tag;
