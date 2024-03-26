import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CurlTwoFBO from "../particules/CurlTwoFBO";
// import Loading from "../../../../../../layout/loader/Loader";h-[512px] w-[512px]

const CurlTwoScene = () => {
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [-1, 2, 3.5] }} dpr={2}>
        <CurlTwoFBO />
      </Canvas>
    </Suspense>
  );
};

export default CurlTwoScene;
