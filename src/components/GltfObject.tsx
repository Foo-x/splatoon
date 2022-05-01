import { useGLTF } from '@react-three/drei';
import React from 'react';

type Props = {
  path: string;
};

const GltfObject: React.FC<Props> = ({ path }) => {
  const gltf = useGLTF(path);
  return <primitive object={gltf.scene} />;
};

export default GltfObject;
