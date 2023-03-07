import React, { useEffect, useState } from 'react';
import Collapse from '../utils/Collapse';
import { svgPlus, svgClose } from '../assets/svg';

const newLineChar = '\n';
const newInstruction = { title: '', instructions: [] };

function InstructionsFormList ({ field, list, setInputs }) {
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    const lastItem = list[list.length - 1];
    setShowAdd(
      list.length > 0 &&
        (lastItem.title !== '' || lastItem.instructions.length > 0)
    );
  });

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

  const addInstruction = () => {
    setInputs((prev) => {
      const newState = { ...prev };
      newState[field.id].push(newInstruction);
      return newState;
    });
  };

  const deleteInstruction = (index) => {
    setInputs((prev) => {
      const newState = { ...prev };
      newState[field.id].splice(index, 1);
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
        {list.length > 1 ? (
          <div className="_list__itemBtn">
            <button
              className="btn btn-circle"
              type="button"
              onClick={() => deleteInstruction(count)}
            >
              {svgClose}
            </button>
          </div>
        ) : (
          ''
        )}

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
          <>
            <ol className="_list _list--numbers _list--bg-alt _list--inputs _list--inputs--close-top-right">
              {list.length
                ? list.map((val, i) => {
                  return renderInstruction(val, i);
                })
                : renderInstruction('', 0)}
            </ol>

            {showAdd ? (
              <div className="flex justify-center mt-6">
                <button
                  className="btn btn-circle"
                  type="button"
                  onClick={addInstruction}
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
  );
}

export default InstructionsFormList;
