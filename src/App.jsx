// import React from "react";
import { useEffect, useState } from "react";
import "../src/App.css";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="block1">block1</div>
        <div className="block2">block2</div>
        <div className="block3">block3</div>
      </div>
      <div>
        <h1 style={{ alignItems: "center" }}>Width:{width}</h1>
      </div>
    </div>
  );
};

export default App;
