import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center position={[-0.05, 0, 0]}>
      <div className="flex justify-center items-center">
        <div className="w-10 md:w-20 h-10 md:h-20 border sm:border-2 border-opacity-20 border-blue-500 border-t-green-500 rounded-full animate-spin" />
      </div>
    </Html>
  );
};

export default Loader;
