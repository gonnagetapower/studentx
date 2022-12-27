import React, { useRef } from 'react';
import useAutosize from '../../hooks/useAutosize.ts';

import './FormTextarea.css';

const FormTextarea = ({
  name,
  value,
  handleChange,
  setFormErrors,
  formErrors,
  error,
  placeholder,
  errorMsg,
}) => {
  const textAreaRef = useRef(null);
  useAutosize(textAreaRef.current, value);
  return (
    <>
      <textarea
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={(e) => setFormErrors({ ...formErrors, [e.target.name]: '' })}
        onBlur={
          value === ''
            ? (e) => setFormErrors({ ...formErrors, [e.target.name]: errorMsg })
            : ''
        }
        className={
          error
            ? `form-textarea form-textarea--${name} error`
            : `form-textarea form-textarea--${name}`
        }
        ref={textAreaRef}
      />
      {error && <span className="errorMsg">{error}</span>}
    </>
  );
};

export default FormTextarea;
