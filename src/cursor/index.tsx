import React, { useEffect, useRef } from "react";
import { Core } from "../core";

const Cursor = ({
  circleCount = 15,
  size = 25,
}: {
  circleCount?: number;
  size?: number;
}) => {
  const cords = { x: 0, y: 0 };
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const positions = useRef<{ x: number; y: number }[]>(
    Array(9).fill({ x: 0, y: 0 }),
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cords.x = e.clientX;
      cords.y = e.clientY;

      requestAnimationFrame(animateCircles);
    };

    const animateCircles = () => {
      let x = cords.x;
      let y = cords.y;

      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          circle.style.left = `${x - 12}px`;
          circle.style.top = `${y - 12}px`;

          circle.style.transform = `scale(calc((${circlesRef.current.length} - ${index}) / ${circlesRef.current.length}))`;

          positions.current[index] = { x, y };

          const nextPosition =
            positions.current[index + 1] || positions.current[0];
          x += (nextPosition.x - x) * 0.3;
          y += (nextPosition.y - y) * 0.3;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const styles: React.CSSProperties = {
    backgroundColor: "white",
    position: "fixed",
    width: size,
    height: size,
    borderRadius: size,
    top: 0,
    left: 0,
    zIndex: 9999,
    pointerEvents: "none",
    cursor: "none",
  };

  window.document.body.style.cursor = "none";

  return (
    <Core className="cursor">
      {Array(circleCount)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={styles}
            className="circle"
            ref={(el) => (circlesRef.current[i] = el!)}
          ></div>
        ))}
    </Core>
  );
};

export default Cursor;
