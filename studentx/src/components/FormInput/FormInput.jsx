import React from 'react';

const FormInput = ({ title, descr, handleChange }) => {
  return (
    <>
      {formErrors.title && <span className="errorMsg">{formErrors.title}</span>}
      <textarea
        type="text"
        name="descr"
        placeholder="Опиши задачу, чем больше подробностей, тем лучше результат :)"
        value={formValues.descr}
        onChange={handleChange}
        onFocus={(e) => setFormErrors({ ...formErrors, [e.target.name]: false })}
        onBlur={
          formValues.title === ''
            ? (e) => setFormErrors({ ...formErrors, [e.target.name]: true })
            : ''
        }
        className={
          formErrors.descr
            ? 'create__input create__input--descr error'
            : 'create__input create__input--descr'
        }
      />
    </>
  );
};

export default FormInput;
