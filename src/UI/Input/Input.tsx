import React from 'react';

import styles from './Input.module.scss';
import classnames from 'classnames';

type InputType = {
  label?: string;
  [x: string]: any;
};

export const Input: React.FC<InputType> = ({ label, ...props }) => {
  const { name, register } = props;

  return (
    <label
      className={classnames({
        [styles.label]: true,
        [styles.checkbox]: props.type === 'checkbox',
      })}>
      {label && <p>{label}:</p>}
      <input
        {...props}
        {...register(name, { required: false })}
        className={classnames({ [styles.input]: true, [props.className]: props.className })}
      />
    </label>
  );
};

export const InputConfForm: React.FC<InputType> = ({ label, ...props }) => (
  <Input placeholder={`Write ${label} count...`} type="number" min="0" label={label} {...props} />
);
