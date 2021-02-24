import React from "react";

type LoaderClassType = {
  [key: string]: string;
};

const Loader = ({ loaderClass }: LoaderClassType) => {
  return (
    <div className="mainLoader">
      <div className={`mainLoader__circle ${loaderClass}`}></div>
      <div className="mainLoader__text">We are simulating loading</div>
    </div>
  );
};

export default Loader;
