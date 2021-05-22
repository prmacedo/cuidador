import React from 'react';

import LoginCard from '../../components/LoginCard';

import styles from './styles.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <LoginCard />
    </div>

  );
}