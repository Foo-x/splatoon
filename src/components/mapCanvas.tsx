import { MapControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import React, { useEffect, useMemo } from 'react';
import { Vector3 } from 'three';
import * as styles from '~/styles/components/mapCanvas.module.css';
import GltfObject from './GltfObject';

type SetupProps = {
  cameraPosition: [number, number, number];
};

const Setup: React.FC<SetupProps> = ({ cameraPosition }) => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(...cameraPosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

type Props = SetupProps & {
  modelPath: string;
  cameraTarget: [number, number, number];
  intensityFrontLeft: number;
  intensityFrontRight: number;
  intensityBackLeft: number;
  intensityBackRight: number;
};

const MapCanvas: React.FC<Props> = ({
  modelPath,
  cameraPosition,
  cameraTarget,
  intensityFrontLeft,
  intensityFrontRight,
  intensityBackLeft,
  intensityBackRight,
}) => {
  const targetVector = useMemo(
    () => new Vector3(...cameraTarget),
    [cameraTarget]
  );

  return (
    <div className={styles.canvasContainer}>
      <div className={styles.canvasInnerContainer}>
        <Canvas>
          <Setup cameraPosition={cameraPosition} />
          <MapControls
            rotateSpeed={0.2}
            panSpeed={0.4}
            minDistance={5}
            maxDistance={20}
            target={targetVector}
          />
          <directionalLight
            position={[100, 100, 100]}
            intensity={intensityFrontLeft}
          />
          <directionalLight
            position={[100, 100, -100]}
            intensity={intensityFrontRight}
          />
          <directionalLight
            position={[-100, 100, 100]}
            intensity={intensityBackLeft}
          />
          <directionalLight
            position={[-100, 100, -100]}
            intensity={intensityBackRight}
          />
          <GltfObject path={modelPath} />
        </Canvas>
      </div>
    </div>
  );
};

export default MapCanvas;
