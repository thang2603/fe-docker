import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const Main = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Main;
