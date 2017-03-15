import React from 'react';

const Input = ({ onChange, formType, placeholder, value, name }) => {
 const onChangeWrapper = (e) => {
   e.preventDefault()
   const valueFromInput = e.target.value
   let params = {}
   params[name] = valueFromInput

   onChange(params)
 }
  return (
    <input
      type={formType}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChangeWrapper}
    />
  )
}

export default Input;
