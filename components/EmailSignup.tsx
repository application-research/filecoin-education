'use client';
import * as U from '@common/utilities';

import styles from '@components/EmailSignup.module.scss';
import React from 'react';
import Input from './Input';
import Button from './Button';

export default function EmailSignup() {
  const [state, setState] = React.useState({
    email: '',
    loading: false,
    success: false,
  });

  return (
    <div>
      {state.success ? (
        <div className={styles.successContainer}>
          <div className={styles.successContainer}>
            <p className={styles.successText}>
              Thank you for singing up! Your response has been recorded. <br />
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <p className={styles.paragraph}>Enroll in to the most comprehensive Filecoin and Web3 certificate program on the new internet</p>
              <p className={styles.paragraph}> Sign up to receive the latest updates</p>
            </div>
            <div className={styles.formContainer}>
              <Input
                style={{ border: '1px solid var(--color-text)', borderRadius: '4px', color: 'var(--color-text)' }}
                value={state.email}
                placeholder="email address..."
                onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                name="email"
              />
              <div className={styles.action}>
                <Button
                  className={styles.button}
                  props={styles.button}
                  loading={state.loading}
                  onClick={async () => {
                    if (U.isEmpty(state.email)) {
                      alert('You must provide an e-mail, or we will not be able to reach you');
                      return;
                    }

                    setState({ ...state, loading: true });

                    try {
                      fetch('/api/signup', {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          email: state.email,
                        }),
                      });
                    } catch (e) {
                      console.log(e);
                    }

                    setState({
                      ...state,
                      loading: true,
                      email: '',
                      success: true,
                    });
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
