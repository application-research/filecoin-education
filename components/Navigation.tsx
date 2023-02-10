import styles from '@components/Navigation.module.scss';
import Button from './Button';

export default function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1 className={styles.logoName}>Filecoin Academia</h1>
      </div>
      <div className={styles.button}>
        <Button>Start Learning</Button>
      </div>
    </div>
  );
}
