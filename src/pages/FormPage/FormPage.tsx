import React from 'react';
import { FormConfigure } from '../../components/FormConfigure/FormConfigure';

import styles from './FormPage.module.scss';
import { MemorizeFormConstructor } from '../../components/FormConstructor/FormConstructor';

export const FormPage = () => {
  const [options, setOptions] = React.useState<FormOptions>({ input: 0, textarea: 0, checkbox: 0 });
  const [showForm, setSHowForm] = React.useState(false);
  const onChangeOptions = (newOptions: FormOptions) => {
    setOptions(newOptions);
    setSHowForm(true);
  };

  return (
    <section className={styles.root}>
      <FormConfigure onHandleSubmit={onChangeOptions} />
      {showForm && <MemorizeFormConstructor {...options} />}
    </section>
  );
};
