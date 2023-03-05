import styles from '@components/DefaultLayout.module.scss';

import * as React from 'react';
import PlausibleAnalyticsScript from './PlausibleAnalyticsScript';

export default function App(props) {
  return (
    <div className={styles.body}>
      <PlausibleAnalyticsScript />
      {props.children}
    </div>
  );
}
