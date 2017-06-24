import React from 'react';

const InputTwo = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={props.className}
        id={props.id}
        name={props.name}
        onChange={props.onFieldChange}
        type={props.type}
        value={props.value}
      />
    </div>
  );
};

InputTwo.defaultProps = {
  type: 'text'
}

export default InputTwo;