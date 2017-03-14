import React from 'react';

const FormInput = ({ onChange, formType, placeholder, value, attributeName}) => {
 console.log(attributeName)
 const onChangeWrapper = (e) => {
   e.preventDefault()
   const valueFromInput = e.target.value
   let params = {}
   params[attributeName] = valueFromInput

   onChange(params)
  //  es6 short cut for declaring object with a dynamic key
  //  onChange({[attributeName]: valueFromInput})
 }
  return <input type={formType} value={value} placeholder={placeholder} onChange={onChangeWrapper} />
}

export default FormInput;
