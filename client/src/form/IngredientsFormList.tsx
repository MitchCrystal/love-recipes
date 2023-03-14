import React, { useEffect, useState } from 'react';
import Collapse from '../utils/Collapse';
import { svgPlus, svgClose } from '../assets/svg';
import { IngredientsFormProps } from '../../types';

const newIngredient = '';

function IngredientsFormList ({ field, list, setInputs }:IngredientsFormProps) {
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    setShowAdd(list.length > 0 && list[list.length - 1] !== '');
  });

  // Update state ingredients array if one ingredient is changed
  const handleChange = (e: Event, index: number) => {
    setInputs((prev) => {
      const newState = { ...prev };
      newState[field.id][index] = e.target.value;
      return newState;
    });
  };

  const addIngredient = () => {
    setInputs((prev) => {
      const newState = { ...prev };
      newState[field.id].push(newIngredient);
      return newState;
    });
  };

  const deleteIngredient = (index:number) => {
    setInputs((prev) => {
      const newState = { ...prev };
      newState[field.id].splice(index, 1);
      return newState;
    });
  };

  const renderIngredient = (value, count) => {
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
          placeholder={field.placeholder}
          className="input input-bordered w-full"
          name={`${field.id}-${count}`}
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
        className={`_form__field _form__field--${field.id}${
          field.customClass || ''
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
