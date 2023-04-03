import React from 'react';

import styles from './Button.module.scss';
import classNames from 'classnames';
import { Link, To } from 'react-router-dom';

type ButtonType = {
  variant: 'primary' | 'secondary';
  [x: string]: any;
};

export const Button: React.FC<ButtonType> = (props) => {
  const { variant } = props;

  return (
    <button
      {...props}
      className={classNames({
        [props.className]: props.className,
        [styles[variant]]: variant,
      })}
    />
  );
};

type ButtonLinkType = {
  variant: 'primary' | 'secondary';
  to: To;
  [x: string]: any;
};

export const ButtonLink: React.FC<ButtonLinkType> = (props) => {
  const { variant } = props;

  return (
    <Link
      {...props}
      className={classNames({
        [props.className]: props.className,
        [styles[variant]]: variant,
      })}
    />
  );
};
