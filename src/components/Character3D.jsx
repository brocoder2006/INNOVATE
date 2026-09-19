import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Floating Neon Target Eye (from NVG8 reference)
function FloatingTargetEye({ position, scrollProgress }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.8 + (scrollProgress * 0.05);
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 2 + scrollProgress * 5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Float speed={3} rotationIntensity={0.4} floatIntensity={0.5}>
        {/* Outer Ring */}
        <mesh>
          <torusGeometry args={[0.45, 0.04, 16, 32]} />
          <meshStandardMaterial color="#84cc16" emissive="#84cc16" emissiveIntensity={2.5} />
        </mesh>
        {/* Inner Eye Orb */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#22c55e" emissive="#4ade80" emissiveIntensity={3} />
        </mesh>
        {/* Target Plus Lines */}
        <mesh position={[0, 0.55, 0]}>
          <boxGeometry args={[0.04, 0.2, 0.04]} />
          <meshStandardMaterial color="#a3e635" emissive="#a3e635" emissiveIntensity={2} />
        </mesh>
        <mesh position={[0, -0.55, 0]}>
          <boxGeometry args={[0.04, 0.2, 0.04]} />
          <meshStandardMaterial color="#a3e635" emissive="#a3e635" emissiveIntensity={2} />
        </mesh>
        <mesh position={[0.55, 0, 0]}>
          <boxGeometry args={[0.2, 0.04, 0.04]} />
          <meshStandardMaterial color="#a3e635" emissive="#a3e635" emissiveIntensity={2} />
        </mesh>
        <mesh position={[-0.55, 0, 0]}>
          <boxGeometry args={[0.2, 0.04, 0.04]} />
          <meshStandardMaterial color="#a3e635" emissive="#a3e635" emissiveIntensity={2} />
        </mesh>
      </Float>
    </group>
  );
}

// Floating Green 3D Security Lock (from NVG8 reference)
function FloatingSecurityLock({ position, scrollProgress }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.6 + (scrollProgress * 0.08);
      groupRef.current.position.y = position[1] + Math.cos(state.clock.getElapsedTime() * 1.8 + scrollProgress * 4) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.6}>
        {/* Lock Shackle */}
        <mesh position={[0, 0.35, 0]}>
          <torusGeometry args={[0.22, 0.05, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#4ade80" emissive="#22c55e" emissiveIntensity={2} />
        </mesh>
        {/* Lock Main Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.55, 0.5, 0.25]} />
          <meshStandardMaterial color="#166534" roughness={0.2} metalness={0.8} />
        </mesh>
        {/* Keyhole Glow */}
        <mesh position={[0, 0, 0.14]}>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#a3e635" emissive="#a3e635" emissiveIntensity={3} />
        </mesh>
      </Float>
    </group>
  );
}

// Floating Data Folder (from NVG8 reference)
function FloatingFolder({ position, scrollProgress }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 1.5 + scrollProgress * 3) * 0.25;
      groupRef.current.rotation.z = scrollProgress * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Float speed={2.8} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.35, 0.08]} />
          <meshStandardMaterial color="#65a30d" emissive="#84cc16" emissiveIntensity={1.5} />
        </mesh>
        {/* Folder Tab */}
        <mesh position={[-0.15, 0.2, 0]}>
          <boxGeometry args={[0.2, 0.08, 0.08]} />
          <meshStandardMaterial color="#84cc16" emissive="#a3e635" emissiveIntensity={2} />
        </mesh>
      </Float>
    </group>
  );
}

// Main 3D Bucket Hat NVG8 Male Navigator Character (Exact nvg8-03.webp Model)
function BucketHatNavigatorModel({ chapterIndex, scrollProgress }) {
  const characterGroupRef = useRef();
  const headRef = useRef();
  const bodyRef = useRef();

  // Waypoint transformations for continuous scroll trigger
  const chapterTransforms = [
    { pos: [2.2, -0.2, -0.5], rot: [0.1, -0.5, 0], scale: 1.15 },
    { pos: [2.4, -0.3, -0.5], rot: [0.15, -0.7, 0.05], scale: 1.05 },
    { pos: [-2.4, 0.2, -0.5], rot: [-0.1, 0.7, -0.05], scale: 1.05 },
    { pos: [2.3, -0.4, -0.5], rot: [0.2, -0.6, 0.1], scale: 1.0 },
    { pos: [2.2, 0.2, -0.5], rot: [-0.1, -0.4, -0.1], scale: 1.2 },
    { pos: [-2.3, 0.0, -0.5], rot: [0.05, 0.6, 0], scale: 1.05 },
    { pos: [2.4, -0.3, -0.5], rot: [0.15, -0.7, 0], scale: 1.0 },
    { pos: [-2.2, 0.1, -0.5], rot: [0, 0.5, 0.08], scale: 1.1 },
    { pos: [0, 0.3, 0], rot: [-0.1, -0.2, 0], scale: 1.25 }
  ];

  const currentTransform = chapterTransforms[chapterIndex] || chapterTransforms[0];

  useFrame((state, delta) => {
    if (!characterGroupRef.current) return;

    // Calculate continuous scroll offset modulation
    const scrollYOffset = Math.sin(scrollProgress * Math.PI * 4) * 0.18;
    const scrollXOffset = Math.cos(scrollProgress * Math.PI * 3) * 0.15;

    // Smooth continuous position & rotation interpolation
    const targetX = currentTransform.pos[0] + scrollXOffset;
    const targetY = currentTransform.pos[1] + scrollYOffset;
    const targetZ = currentTransform.pos[2];

    characterGroupRef.current.position.x = THREE.MathUtils.lerp(characterGroupRef.current.position.x, targetX, delta * 3.5);
    characterGroupRef.current.position.y = THREE.MathUtils.lerp(characterGroupRef.current.position.y, targetY, delta * 3.5);
    characterGroupRef.current.position.z = THREE.MathUtils.lerp(characterGroupRef.current.position.z, targetZ, delta * 3.5);

    const targetRotX = currentTransform.rot[0] + Math.sin(scrollProgress * Math.PI * 2) * 0.08;
    const targetRotY = currentTransform.rot[1] + (scrollProgress * 0.3) - 0.15;
    const targetRotZ = currentTransform.rot[2] + Math.cos(scrollProgress * Math.PI * 2) * 0.05;

    characterGroupRef.current.rotation.x = THREE.MathUtils.lerp(characterGroupRef.current.rotation.x, targetRotX, delta * 3.5);
    characterGroupRef.current.rotation.y = THREE.MathUtils.lerp(characterGroupRef.current.rotation.y, targetRotY, delta * 3.5);
    characterGroupRef.current.rotation.z = THREE.MathUtils.lerp(characterGroupRef.current.rotation.z, targetRotZ, delta * 3.5);

    const targetScale = currentTransform.scale;
    characterGroupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 3.5);

    // Subtle head glance mouse tracking
    if (headRef.current) {
      const mouseX = (state.pointer.x * Math.PI) / 10;
      const mouseY = (state.pointer.y * Math.PI) / 12;
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouseX - 0.3, delta * 4);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -mouseY, delta * 4);
    }
  });

  return (
    <group ref={characterGroupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* Floating NVG8 Sci-Fi Companion Icons */}
        <FloatingTargetEye position={[-1.3, 1.5, 0.4]} scrollProgress={scrollProgress} />
        <FloatingSecurityLock position={[-1.6, -0.6, 0.6]} scrollProgress={scrollProgress} />
        <FloatingFolder position={[1.4, -0.8, 0.2]} scrollProgress={scrollProgress} />

        {/* Head with Light Blue Bucket Hat (NVG8 Reference) */}
        <group ref={headRef} position={[0, 1.25, 0]}>
          {/* Light Blue Bucket Hat Top Crown */}
          <mesh position={[0, 0.4, 0]}>
            <cylinderGeometry args={[0.52, 0.62, 0.42, 32]} />
            <meshStandardMaterial color="#bae6fd" roughness={0.3} metalness={0.1} />
          </mesh>

          {/* Bucket Hat Slanted Brim */}
          <mesh position={[0, 0.18, 0]} rotation={[0.05, 0, 0]}>
            <cylinderGeometry args={[0.62, 0.88, 0.16, 32]} />
            <meshStandardMaterial color="#93c5fd" roughness={0.3} metalness={0.1} />
          </mesh>

          {/* Cyan Band on Bucket Hat */}
          <mesh position={[0, 0.26, 0]}>
            <cylinderGeometry args={[0.56, 0.58, 0.08, 32]} />
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
          </mesh>

          {/* Green Square Badge on Hat Front */}
          <mesh position={[0, 0.32, 0.56]} rotation={[-0.1, 0, 0]}>
            <boxGeometry args={[0.16, 0.16, 0.04]} />
            <meshStandardMaterial color="#84cc16" emissive="#84cc16" emissiveIntensity={2} />
          </mesh>

          {/* Character Head / Male Face */}
          <mesh position={[0, -0.08, 0.1]}>
            <boxGeometry args={[0.54, 0.46, 0.45]} />
            <meshStandardMaterial color="#d1a684" roughness={0.5} />
          </mesh>

          {/* Male Jawline & Chin turned sideways glance */}
          <mesh position={[-0.08, -0.32, 0.2]}>
            <boxGeometry args={[0.36, 0.16, 0.26]} />
            <meshStandardMaterial color="#c49a78" roughness={0.5} />
          </mesh>

          {/* Cyber Headphones (White & Cyan) under Bucket Hat */}
          <group position={[0, -0.12, 0.05]}>
            <mesh position={[-0.54, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.2, 0.2, 0.12, 16]} />
              <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.6} />
            </mesh>
            <mesh position={[-0.58, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.13, 0.13, 0.04, 16]} />
              <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} />
            </mesh>
            <mesh position={[0.54, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.2, 0.2, 0.12, 16]} />
              <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.6} />
            </mesh>
            <mesh position={[0.58, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.13, 0.13, 0.04, 16]} />
              <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} />
            </mesh>
          </group>
        </group>

        {/* Coral Pink Hood Back & Orange Jacket Torso (NVG8 Exact Proportions) */}
        <group ref={bodyRef} position={[0, -0.3, 0]} rotation={[0, -0.3, 0]}>
          {/* Large Puffy Coral Pink Hood on Back (Exact nvg8-03.webp Pink Hood!) */}
          <mesh position={[0.08, 0.6, -0.35]} rotation={[0.4, 0, 0]}>
            <sphereGeometry args={[0.75, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.7]} />
            <meshStandardMaterial color="#f43f5e" roughness={0.3} metalness={0.1} />
          </mesh>

          {/* High Coral Pink Padded Collar */}
          <mesh position={[0, 0.48, 0.1]}>
            <torusGeometry args={[0.54, 0.18, 16, 32]} />
            <meshStandardMaterial color="#ec4899" roughness={0.3} />
          </mesh>

          {/* Main Orange Jacket Body */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.3, 1.45, 0.75]} />
            <meshStandardMaterial color="#f97316" roughness={0.4} metalness={0.1} />
          </mesh>

          {/* Black Outer Contour Line Accents */}
          <mesh position={[0, 0, 0.39]}>
            <boxGeometry args={[0.08, 1.4, 0.04]} />
            <meshStandardMaterial color="#0f172a" roughness={0.2} />
          </mesh>

          {/* Shoulders */}
          <mesh position={[-0.72, 0.45, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#ea580c" roughness={0.3} />
          </mesh>
          <mesh position={[0.72, 0.45, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#ea580c" roughness={0.3} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export default function Character3DCanvas({ chapterIndex }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Real-time continuous scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1
      }}
      data-testid="3d-character-canvas-container"
    >
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      >
        {/* Cinematic NVG8 Lighting */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[6, 8, 6]} intensity={1.8} color="#ffffff" castShadow />
        <pointLight position={[-6, -2, 2]} intensity={2.5} color="#ec4899" />
        <pointLight position={[6, 2, 4]} intensity={3} color="#84cc16" />

        {/* Exact NVG8 Bucket Hat Male Navigator Model acting continuously with scrollProgress */}
        <BucketHatNavigatorModel chapterIndex={chapterIndex} scrollProgress={scrollProgress} />

        {/* Orbiting Green Sparkle Particles */}
        <Sparkles count={80} scale={[12, 12, 12]} size={3.5} speed={0.8 + scrollProgress} color="#a3e635" opacity={0.65} />
      </Canvas>
    </div>
  );
}
