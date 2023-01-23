import { useState } from "react";

const FormInput = (props: { [x: string]: any; label: any; errorMessage: any; onChange: any; id: any; }) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: any) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
          
        }
      />
      <span className="span2">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
