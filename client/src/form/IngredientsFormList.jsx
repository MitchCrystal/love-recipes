import React from 'react';
import Collapse from '../utils/Collapse';

function IngredientsFormList ({ field, list, setInputs }) {
  // Update state ingredients array if one ingredient is changed
  const handleChange = (e, index) => {
    setInputs((prev) => {
      const newState = { ...prev };
      newState[field.id][index] = e.target.value;
      return newState;
    });
  };

  const renderIngredient = (value, count) => {
    return (
      <li key={count}>
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
            <ul className="_list">
              {list.length
                ? list.map((ingredient, i) => {
                  return renderIngredient(ingredient, i);
                })
                : renderIngredient('', 0)}
            </ul>
          }
        />
      </div>
    </>
  );
}

export default IngredientsFormList;
