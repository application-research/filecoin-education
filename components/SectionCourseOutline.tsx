import styles from '@components/CourseOutline.module.scss';

export function CourseOutline() {
  return (
    <div className={styles.courseOutline}>
      <div className={styles.content}>
        <div>
          <h3 className={styles.eyebrow}>Course Outline</h3>

          <h2 className={styles.title}>Class is in Session</h2>
        </div>

        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis fermentum nisl, eget fermentum ligula tempor sit amet. Sed in ante aliquet, sagittis augue et,
          auctor neque. Cras pellentesque augue
        </p>
      </div>
    </div>
  );
}
