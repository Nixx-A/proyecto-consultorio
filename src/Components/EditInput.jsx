import React from 'react'
export default function EditInput ({ name, type, required, isViewMode, value, handleChange, title }) {
  return (
    <>
      <label htmlFor={name}>{title}</label>
      <input
        className='border-2 mb-2 border-black disabled:bg-gray-300 '
        type={type}
        name={name}
        required={required}
        disabled={isViewMode}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}
