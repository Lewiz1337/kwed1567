import React from 'react';
import { CRAContent } from '../../components/CRAContent/CRAContent';
import { ButtonLink } from '../../UI/Button/Button';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.root}>
      <CRAContent />
      <ButtonLink to="form" variant="primary">
        form
      </ButtonLink>
    </div>
  );
};
