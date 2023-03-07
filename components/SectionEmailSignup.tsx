'use client';

import styles from '@components/SectionEmailSignup.module.scss';

import FilecoinFlag from './icons/FilecoinFlag';
import FilecoinHeading from './icons/FilecoinHeadingSVG';
import EmailSignup from './EmailSignup';
import FilecoinSVG from './icons/FilecoinSVG';
import EstuarySVG from './icons/EstuarySVG';
import PixelsSVG from './icons/PixelsSVG';

export function SectionEmailSignup() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <div className={styles.headingContainer}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src="https://user-images.githubusercontent.com/28320272/223461349-695cae41-0292-4814-a0cd-86970083c1db.png" />
            <h4 className={styles.smallHeading}>Filecoin Education</h4>
          </div>

          <div className={styles.label}>
            <a className={styles.link} href="https://protocol.ai/" target="_blank">
              Protocol Labs
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.filecoinFlag}>
            <FilecoinFlag style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className={styles.filecoinHeading}>
            <FilecoinHeading style={{ height: 'auto', width: '100%' }} />
          </div>
          <div>
            <EmailSignup />
          </div>
        </div>
        <div className={styles.graphicsContainer}>
          <PixelsSVG className={styles.pixelsIcon} />
          <EstuarySVG className={styles.estuaryIcon} />

          <FilecoinSVG className={styles.filecoinIcon} />
        </div>
      </div>
    </div>
  );
}
