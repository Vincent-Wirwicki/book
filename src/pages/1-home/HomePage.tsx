import CurlTwoScene from "../../components/particules/scene/CurlTwoScene";
// import LinkedinLogo from "../../components/logo/LinkedinLogo";

const HomePage = () => {
  return (
    <main className="w-full h-full grid-layout">
      <div className="relative col-start-3 col-end-5 row-start-4 row-end-5 text-end">
        Hi, I am Vincent Wirwicki <br />a creative and front-end <br />{" "}
        developer <br />
      </div>
      <div className="relative col-start-3 col-end-5 row-start-10 row-end-10 text-end text-xs">
        <span className="underline underline-offset-2">Instagram</span>
        {"  "}
        <span className="underline underline-offset-2">Linkedin</span>
        {"  "}
        <span className="underline underline-offset-2">Twitter</span>
        <br />
      </div>
      <div className="relative col-start-8 col-end-10 row-start-6 row-end-7 list-none text-neutral-200 pl-2  self-end flex flex-col gap-2 text-end">
        Projects <br />{" "}
        <a
          href="https://creative-react-components.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Creative components
        </a>{" "}
        <a
          href="https://raymarching-r3f.netlify.app/"
          target="blank"
          className="underline"
        >
          This is not 3d
        </a>{" "}
        <a
          href="https://particules-canvas-three.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Particules of lights
        </a>{" "}
        {/* <ul className="pb-1 font-light">Projects</ul>{" "}
        <li className="pb-1 font-bold">This is not 3d</li>
        <li className="pb-1 font-bold"> Particules of lights</li>
        <li className="pb-1 font-bold">Creative components</li> */}
      </div>
      <div className="relative col-start-8 col-end-10 row-start-9 row-end-10 list-none text-neutral-200 text-end">
        <span>Stacks </span> <br />
        html - css - Typescrit <br /> React - Next - Tailwind <br />
        Framer-motion - Three-fiber <br />
      </div>
      <div className="relative h-full w-full col-start-4 col-end-10 row-start-3 row-span-8 ">
        <CurlTwoScene />
      </div>
      {/* <div className="relative col-start-8 col-end-11 row-start-8 row-end-10 list-none  ">
        <ul>Things I don't develop : </ul>
        <li> - Java is not javascript</li>
        <li> - React/Next because function over this.class</li>
        <li> - Tailwind is like CSS (almost...)</li>
        <li> - Framer-motion / GSAP for animation</li>
        <li> - THREE for 3D and glsl</li>
      </div> */}
      {/* <h1 className="font-light tracking-wider col-start-5 col-end-7 row-start-3  self-end border-b  border-neutral-800 w-full text-start">
        Vincent Wirwicki
      </h1>
      <h3 className=" relative col-start-4 col-end-7 row-start-6 self-end border-b border-neutral-800 text-start">
        Creative front-end developer
      </h3> */}
      {/* <h3 className=" relative col-start-10 col-end-12 row-start-5 self-end border-b border-neutral-800 flex justify-between items-end">
        <span>Contact</span>{" "}
      </h3> */}
      {/* <h3 className=" relative col-start-5 col-end-9 row-start-10  flex justify-between gap-1 pt-1  border-t border-neutral-800">
        Creative front-end developer
        <span className="text-xs underline font-thin">Linkedin</span>        
        <ul>Things I like to develop with : </ul>
        <li> - Typescript for my code editor suggestion</li>
        <li> - React/Next because function over this.class</li>
        <li> - Tailwind is like CSS (almost...)</li>
        <li> - Framer-motion / GSAP for animation</li>
        <li> - THREE for 3D and glsl</li>
        <span className="text-xs underline font-thin">Instagram</span>
        <span className="text-xs underline font-thin">X/twitter</span>
      </h3> */}
    </main>
  );
};

export default HomePage;
// <h1 className="font-light tracking-wider col-start-2 col-span-5 row-start-3 text-4xl ">
//   Vincent Wirwicki
// </h1>
// <h3 className="font-light tracking-wider col-start-6 col-span-5 row-start-5 text-4xl">
//   front-end <br /> creative <br />
//   developer
// </h3>
// <h3 className="font-light tracking-wider col-start-2 col-span-5 row-start-5 row-span-2 text-4xl">
//   {" "}
//   from Paris
// </h3>
