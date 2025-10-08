import React, { useRef, useEffect, useState } from "react";

const RevealOnScroll = ({ children }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`section${visible ? " visible" : ""}`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
