import React from 'react';
import { getRecipeDataLabel } from '../features/recipe/config';

function FormInput ({ field, value, setInputs }) {
  return (
    <div
      className={`_form__field _form__field--${field.id}${
        field.customClass || ''
      }`}
    >
      <label className="label">
        <span className="label-text">{getRecipeDataLabel(field)}</span>
      </label>
      <input
        type="text"
        placeholder={field.placeholder}
        className="input input-bordered w-full"
        name={field.id}
        value={value}
        onChange={(e) =>
          setInputs((prev) => ({
            ...prev,
            [field.id]: e.target.value,
          }))
        }
        required
      />
    </div>
  );
}

export default FormInput;
