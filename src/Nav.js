import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1920px-Logonetflix.png"
        alt="Netflix Logo"
        className="nav__logo"
      />
      {/* https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/1920px-Logonfx.png */}
      <img
        src="https://th.bing.com/th/id/OIP.zR8RCGWgd_qY_KaAlRDbRgAAAA?pid=ImgDet&rs=1"
        alt="Netflix Avatar"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
