import React from 'react';
import { MainFormInputProps } from '../../types';
import { getRecipeDataLabel } from '../features/recipe/config';

function FormInput ({ formField, value, setInputs }:MainFormInputProps) {
  return (
    <div
      className={`_form__field _form__field--${formField.id}${
        formField.customClass || ''
      }`}
    >
      <label className="label">
        <span className="label-text">{getRecipeDataLabel(formField)}</span>
      </label>
      <input
        type="text"
        placeholder={formField.placeholder}
        className="input input-bordered w-full"
        name={formField.id}
        value={value}
        onChange={(e) =>
          setInputs((prev) => ({
            ...prev,
            [formField.id]: e.target.value,
          }))
        }
        required
      />
    </div>
  );
}

export default FormInput;
