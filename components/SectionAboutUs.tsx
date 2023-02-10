import styles from '@components/SectionAboutUs.module.scss';

export function SectionAboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrap}>
        <h3 className={styles.eyebrow}>About Us </h3>
        <h1 className={styles.heading}>Who we are and why are we doing this?</h1>

        <div className={styles.rowOfImages}>
          <img className={styles.image} src="https://user-images.githubusercontent.com/28320272/218136923-1b0aaf93-9492-4a1c-9362-e52e01c55575.svg" />
          <img className={styles.image} src="https://user-images.githubusercontent.com/28320272/218136926-e4e2c0ca-b0f0-4fdd-9c3f-8f4999fdb524.svg" />
          <img className={styles.image} src="https://user-images.githubusercontent.com/28320272/218136918-37f65715-48f0-4bbe-be46-72469d62bff3.svg" />
        </div>

        <p className={styles.paragraph}>
          Phasellus dolor elit, accumsan ut ultrices ut, porttitor in lectus. Proin sed luctus risus. Cras id lobortis sem. Nullam luctus non nulla a tempor. Vivamus lectus neque,
          euismod ut pretium eget, pretium vitae dui. Pellentesque egestas{' '}
        </p>
      </div>
    </div>
  );
}
