import React from 'react';

const Input = ({ onChange, formType, placeholder, value, attributeName }) => {
 const onChangeWrapper = (e) => {
   e.preventDefault()
   const valueFromInput = e.target.value
   let params = {}
   params[attributeName] = valueFromInput

   onChange(params)
 }
  return (
    <input
      type={formType}
      value={value}
      placeholder={placeholder} onChange={onChangeWrapper}
    />
  )
}

export default Input;
