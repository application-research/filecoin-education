import styles from '@components/SectionVideo.module.scss';

export default function SectionVideo() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <div>
              <h3 className={styles.eyebrow}>Welcome to Web3</h3>
              <h1 className={styles.title}>Become part of the Web3 ecosystem</h1>
            </div>

            <p className={styles.paragraph}>Learn about the principles of distributed systems and how they can be used to create secure, decentralized storage solutions.</p>
          </div>

          <div className={styles.videoContainer}>
            <video />
          </div>
        </div>
      </div>
    </div>
  );
}
