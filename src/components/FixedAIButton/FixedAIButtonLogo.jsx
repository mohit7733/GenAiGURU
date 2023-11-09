import React, { useEffect, useState } from "react";

const FixedAIButtonLogo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {isScrolled && (
        <div className="fixedBtn">
          <figure>
            <img src="app/images/fixedButtonLogo.png" alt="AI GURU LOGO" />
          </figure>
        </div>
      )}
    </>
  );
};

export default FixedAIButtonLogo;
