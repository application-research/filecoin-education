'use client';

import styles from '@components/Hero.module.scss';

import Button from './Button';

import { Canvas } from '@react-three/fiber';

export function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.column1}>
        <h1 className={styles.heading}>FILECOIN ACADEMIA</h1>

        <p className={styles.subheading}>Enroll into the most comprehensive Filecoin and Web3 certificate program on the new internet</p>

        <div>
          <Button className={styles.button}>Start Learning</Button>
        </div>
      </div>
      <div className={styles.column2}>
        <Canvas orthographic camera={{ zoom: 200 }}>
          <color attach="background" args={['#000']} />
        </Canvas>
      </div>
    </div>
  );
}
