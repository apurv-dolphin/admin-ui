import React, { useEffect, useState } from "react";

import { ImArrowUp } from "react-icons/im";

export default function ScrollToTop() {
  const [topButton, setTopButtton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setTopButtton(true);
      } else {
        setTopButtton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {topButton && (
        <div onClick={scrollUp}>
          <ImArrowUp />
        </div>
      )}
    </div>
  );
}
