import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useForm } from 'react-hook-form';

import { Textarea, Input } from '../../UI';

import styles from './FormConstructor.module.scss';

export const FormConstructor: React.FC<FormOptions> = ({ input, textarea, checkbox }) => {
  const [parent] = useAutoAnimate();

  const { register } = useForm<any>();

  const renderInputs = ({ type, label, value }: renderInputsType) => {
    if (value === 0) return;
    return (
      <>
        {[...new Array(value)].map((_, index) => {
          const props = {
            type: type !== 'textarea' ? type : 'text',
            key: uuidv4(),
            label: label ? label : `${type} ${index + 1}`,
            name: `${type}${index + 1}`,
            register,
          };
          return type !== 'textarea' ? (
            <Input placeholder="Some text..." {...props} />
          ) : (
            <Textarea placeholder="Some text..." {...props} />
          );
        })}
      </>
    );
  };

  return (
    <form ref={parent} className={styles.root}>
      <h2>Your form</h2>
      {renderInputs({ type: 'text', value: input })}
      {renderInputs({ type: 'textarea', value: textarea })}
      {renderInputs({ type: 'checkbox', value: checkbox })}
    </form>
  );
};

export const MemorizeFormConstructor = React.memo(FormConstructor);
