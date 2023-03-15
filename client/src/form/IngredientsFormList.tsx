import React, { useEffect, useState } from 'react';
import Collapse from '../utils/Collapse';
import { svgPlus, svgClose } from '../assets/svg';
import { BlankRecipeType, GeneralFormInputProps } from '../../types';

interface IngredientProps extends GeneralFormInputProps {
  list: string[];
}

const newIngredient = '';

function IngredientsFormList ({ formField, list, setInputs }:IngredientProps) {
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    setShowAdd(list.length > 0 && list[list.length - 1] !== '');
  });

  // Update state ingredients array if one ingredient is changed
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setInputs((prev) => {
      const newState = { ...prev };
      (newState[formField.id as keyof BlankRecipeType] as string[])[index] = e.target.value;
      return newState;
    });
  };

  const addIngredient = () => {
    setInputs((prev) => {
      const newState = { ...prev };
      (newState[formField.id as keyof BlankRecipeType] as string[]).push(newIngredient);
      return newState;
    });
  };

  const deleteIngredient = (index:number) => {
    setInputs((prev) => {
      const newState = { ...prev };
      (newState[formField.id as keyof BlankRecipeType] as string[]).splice(index, 1);
      return newState;
    });
  };

  const renderIngredient = (value: string, count:number) => {
    return (
      <li key={count}>
        {list.length > 1 ? (
          <div className="_list__itemBtn">
            <button
              className="btn btn-circle"
              type="button"
              onClick={() => deleteIngredient(count)}
            >
              {svgClose}
            </button>
          </div>
        ) : (
          ''
        )}

        <input
          type="text"
          placeholder={formField.placeholder}
          className="input input-bordered w-full"
          name={`${formField.id}-${count}`}
          value={value}
          onChange={(e) => handleChange(e, count)}
          required
        />
      </li>
    );
  };

  return (
    <>
      <div
        className={`_form__field _form__field--${formField.id}${
          formField.customClass || ''
        }`}
      >
        <Collapse
          title="Ingredients"
          content={
            <>
              <ul className="_list _list--inputs">
                {list.length
                  ? list.map((ingredient, i) => {
                    return renderIngredient(ingredient, i);
                  })
                  : renderIngredient('', 0)}
              </ul>

              {showAdd ? (
                <div className="flex justify-center mt-6">
                  <button
                    className="btn btn-circle"
                    type="button"
                    onClick={addIngredient}
                  >
                    {svgPlus}
                  </button>
                </div>
              ) : (
                ''
              )}
            </>
          }
        />
      </div>
    </>
  );
}

export default IngredientsFormList;
