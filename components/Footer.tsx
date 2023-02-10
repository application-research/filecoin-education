import styles from '@components/Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrap}>
        <div className={styles.wrap}>
          <h3 className={styles.logoName}>Filecoin Academia</h3>
          <p className={`${styles.copyright} ${styles.paragraph}`}>All rights reserved. Protocol Labs, Filecoin Academia. Copyright 2023 ©</p>
        </div>

        <div className={styles.content}>
          <div className={styles.items}>
            <p>Course Outline</p>
            <p>Instructors</p>
            <p>Enrollment</p>
            <p>FAQs</p>
            <p>Contact</p>
          </div>
          <p className={styles.paragraph}>Follow our social media - Twitter </p>
        </div>
      </div>
    </div>
  );
}
