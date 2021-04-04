import React from "react";

const ScrollButton = ({ show }) => {
  return (
    <div
      style={{
        background: "#4a4a4a",
        position: "fixed",
        bottom: "70px",
        right: "30px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        zIndex: 999,
        boxShadow: "0 10px 10px -5px;",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        transition: "all 0.30s",
        visibility: show,
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i
        className="fab fa-get-pocket"
        style={{ transform: "rotate(180deg)" }}
      ></i>
    </div>
  );
};

export default ScrollButton;
