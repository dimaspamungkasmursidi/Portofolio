import React, { useState, useEffect } from "react";

const Attention = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); //
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-primary flex flex-col items-center justify-center ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <h1 className="font-inter text-36 font-bold mb-1">Attention!</h1>
        <p className="font-montserrat text-4 text-center">
          This website is unfinished, still under development...
        </p>
        <br />
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-black"></div>
      </div>
    </>
  );
};

export default Attention;
