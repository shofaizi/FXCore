import React from 'react';

const FormInput = ({ onChange, formType, placeholder, value, name}) => {
 const onChangeWrapper = (e) => {
   e.preventDefault()
   const valueFromInput = e.target.value
   let params = {}
   params[name] = valueFromInput

   onChange(params)
  //  es6 short cut for declaring object with a dynamic key
  //  onChange({[attributeName]: valueFromInput})
 }
  return (
    <input
      type={formType}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChangeWrapper}
    />
  )
}

export default FormInput;
