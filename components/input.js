import React from "react";

function InputGroup({
  className = "",
  label = "",
  name = "",
  type = "text",
  placeholder = "",
  error = false,
  errorText = "",
  defaultValue = "",
  description = "",
  horizontal = false,
  onChange = () => {},
  ...newProps
}) {
  const hasError = error || errorText;
  const finalClass = `${className} w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400 ${
    hasError && `border-red-600`
  }`;
  console.log(defaultValue);
  return (
    <div className={horizontal ? "sm:flex sm:items-center" : ""}>
      {label && (
        <label
          className={`text-sm text-gray-600 ${hasError && "text-red-600"} ${
            horizontal && "sm:w-24"
          }`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className={horizontal ? "sm:flex-1" : ""}>
        <input
          type={type}
          name={name}
          className={finalClass}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.currentTarget.value)}
          {...newProps}
        />
        {description && (
          <span className="mt-2 text-xs text-gray-600">{description}</span>
        )}
        {errorText && (
          <div className="px-4 py-2 mt-2 text-xs text-red-600 bg-red-200 rounded-sm">
            {errorText}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputGroup;
