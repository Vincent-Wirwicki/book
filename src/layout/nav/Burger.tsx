import React from "react";

const Burger = () => {
  //   const tranformgrid = (i: number) => {};
  const r56 = "rotate-45 opacity-0";
  //   const rReverse = "rotate-[-45deg]";

  return (
    <div className="grid grid-cols-3 grid-rows-3 border border-neutral-800 p-2 text-center">
      {Array.from({ length: 9 }, (_, idx) => (
        <div key={idx + Math.random()} className={idx % 2 === 0 ? "" : r56}>
          _
        </div>
      ))}
    </div>
  );
};

export default Burger;
