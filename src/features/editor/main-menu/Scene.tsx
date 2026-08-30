import { OrbitControls, Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";
const Scene = () => {
  return (
    <group>
      <Perf position="top-left" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[100, 100, 5]} intensity={1} />
      <OrbitControls
        makeDefault
        minPolarAngle={0} // Không cho xoay xuống dưới lòng đất
        maxPolarAngle={Math.PI / 2.1} // Giới hạn ngay sát mặt đất
        // 3. Giới hạn khoảng cách Thu/Phóng (Zoom)
        minDistance={2}
        maxDistance={60}
      />
      <gridHelper args={[10, 10]} />
      <axesHelper args={[100]} />
      <Sky />
      <mesh>
        <meshStandardMaterial color="green" />
        <boxGeometry args={[1000, 0.1, 1000]} />
      </mesh>
    </group>
  );
};

export default Scene;
