import React from "react";

export const Input26 = ({
  isRequired,
  inputType,
  inputName,
  inputPlaceholder,
  errorMessage,
  value,
  onChange,
  hasError,
}) => {
  return (
    <label className="input-wrapper">
      <input
        required={isRequired}
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span id="error-message">{errorMessage}</span>
    </label>
    {hasError && <span id="error-message">{errorMessage}</span>}
    </label>
  );
};
