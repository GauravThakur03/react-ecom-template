import React from "react";

const Title = (props) => {
  const { name, title } = props;
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weightbold">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;
