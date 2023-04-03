import React from 'react';

import styles from './Textarea.module.scss';
import classnames from 'classnames';

type InputType = {
  label?: string;
  [x: string]: any;
};

export const Textarea: React.FC<InputType> = ({ label, ...props }) => {
  const { name, register } = props;

  return (
    <div className={styles.root}>
      <label className={styles.label}>
        {label && <p>{label}:</p>}
        <textarea
          {...props}
          {...register(name, { required: false })}
          className={classnames({ [styles.textarea]: true, [props.className]: props.className })}
        />
      </label>
    </div>
  );
};
