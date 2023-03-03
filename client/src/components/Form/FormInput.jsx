function FormInput({ field, value, setInputs }) {
  return (
    <div
      className={`_form__field _form__field--${field.id}${
        field.customClass || ''
      }`}
    >
      <label className="label">
        <span className="label-text">
          {field.label || field.id[0].toUpperCase() + field.id.slice(1)}
        </span>
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
