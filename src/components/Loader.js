import React from "react";

const Loader = () => {
  return (
    <div className="container loader-bg px-0">
      <p className="animate-pulse font-secondary md:text-6xl text-3xl text-dark text-center mt-14">
        Chargement en cours...
      </p>
    </div>
  );
};

export default Loader;
