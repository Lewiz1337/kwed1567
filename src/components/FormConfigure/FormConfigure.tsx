import React from 'react';

import { useForm } from 'react-hook-form';

import { Button, ButtonLink, InputConfForm } from '../../UI';

import { ReactComponent as BackSVG } from '../../media/svg/left-back-arrow-svgrepo-com.svg';
import { ReactComponent as BuildSVG } from '../../media/svg/settings-svgrepo-com.svg';

import styles from './FormConfigure.module.scss';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export const FormConfigure: React.FC<FormConfigureType> = ({ onHandleSubmit }) => {
  const [parent] = useAutoAnimate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormOptions>({
    mode: 'onSubmit',
  });

  const onSubmit = (data: FormOptions) => {
    const { input, textarea, checkbox } = data;
    if (!+input && !+textarea && !+checkbox) {
      setError('root', { type: 'all zeros' });
    } else {
      onHandleSubmit({ input: +input, textarea: +textarea, checkbox: +checkbox });
    }
  };

  return (
    <form ref={parent} onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <InputConfForm label="input" name="input" register={register} />
      <InputConfForm label="textarea" name="textarea" register={register} />
      <InputConfForm label="checkbox" name="checkbox" register={register} />
      <div className={styles.buttons}>
        <Button variant="primary" type="submit">
          <BuildSVG />
          BUILD
        </Button>
        <ButtonLink to="../" variant="secondary">
          <BackSVG />
          Back
        </ButtonLink>
      </div>

      {errors.root && (
        <p className={styles.error}>At least one property must be greater than zero!</p>
      )}
    </form>
  );
};
