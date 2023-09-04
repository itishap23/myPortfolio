import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
    const computer = useGLTF('./lost_programmer/scene.gltf');
    return (
        <mesh>
            <hemisphereLight intensity={3} groundColor="black" />
            <pointLight intensity={3} />
            {/* <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={10}
                castShadow
                shadow-mapsize={1024} */}
            {/* /> */}
            <primitive
                object={computer.scene}
                scale={isMobile ? 1 : 3}
                position={isMobile ? [0, -3, -0.2] : [-1.5, -2.25, -1.0]}
                rotation={[-3.01, -11.9, -0.1]}
            />
        </mesh>
    );
};
const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width:500px)');

        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableRotate={true}
                    enableZoom={false}
                    autoRotate
                />
                <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};
export default ComputersCanvas;
