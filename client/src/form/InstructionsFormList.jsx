import React from 'react';

import Collapse from '../utils/Collapse';

const newLineChar = '\n';

function InstructionsFormList ({ field, list, setInputs }) {
  // Update state instructions array if one instruction is changed
  const handleChange = (e, index, fieldType) => {
    setInputs((prev) => {
      const newState = { ...prev };
      let newValue = e.target.value;

      if (fieldType === 'instructions') {
        newValue = newValue.split(newLineChar);
      }

      newState[field.id][index] = {
        ...newState[field.id][index],
        [fieldType]: newValue,
      };

      return newState;
    });
  };

  const renderInstruction = (value, count) => {
    const { title, instructions } = value || { title: '', instructions: [] };

    return (
      <li
        key={count}
        className="rounded-box"
      >
        <div
          className={`_form__field _form__field--${field.id}${
            field.customClass || ''
          }`}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder={field.placeholder}
              name={`${field.id}-${count}`}
              value={title}
              onChange={(e) => handleChange(e, count, 'title')}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Text</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              name={`${field.id}-${count}`}
              value={instructions.join(newLineChar)}
              onChange={(e) => handleChange(e, count, 'instructions')}
            ></textarea>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div
      className={`_form__field _form__field--${field.id}${
        field.customClass || ''
      }`}
    >
      <Collapse
        title="Steps"
        content={
          <ol className="_list _list--numbers _list--bg-alt">
            {list.length
              ? list.map((val, i) => {
                return renderInstruction(val, i);
              })
              : renderInstruction('', 0)}
          </ol>
        }
      />
    </div>
  );
}

export default InstructionsFormList;
