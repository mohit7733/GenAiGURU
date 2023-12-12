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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Use smooth scrolling
    });
  };
  return (
    <>
      {isScrolled && (
        <div className="fixedBtn">
          <figure onClick={scrollToTop}>
            <img src="app/images/fixedButtonLogo.png" alt="AI GURU LOGO" />
          </figure>
        </div>
      )}
    </>
  );
};

export default FixedAIButtonLogo;
