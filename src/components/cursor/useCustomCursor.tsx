import { useEffect, RefObject, useRef, useCallback } from "react";

const useCustomCursor = (ref: RefObject<HTMLElement>, ease: number = 0.075) => {
  const frame = useRef(0);
  const mousePosRef = useRef({
    mx: 0,
    my: 0,
    target: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
  });

  const lerp = (start: number, end: number, ease: number) =>
    (1 - ease) * start + ease * end;

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    mousePosRef.current.mx = clientX;
    mousePosRef.current.my = clientY;
  };

  const animate = useCallback(() => {
    const { mx, my, target } = mousePosRef.current;
    if (ref.current) {
      target.x = lerp(target.x, mx, ease);
      target.y = lerp(target.y, my, ease);
      ref.current.style.transform = `translate3d(
          ${target.x - ref.current.offsetWidth / 2}px,
          ${target.y - ref.current.offsetHeight / 2}px,0)`;
    }
    frame.current = requestAnimationFrame(animate);
  }, [ease, ref]);

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame.current);
      frame.current = 0;
    };
  }, [ref, ease, animate]);
};

export default useCustomCursor;
