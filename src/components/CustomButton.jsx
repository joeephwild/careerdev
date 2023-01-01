import React from 'react'

const CustomButton = ({title, style, btnType, handleClick}) => {
  return (
    <button type={btnType} className={`px-8 cursor-pointer py-2.5 ${style}`} onClick={handleClick}>
        {title}
    </button>
  )
}

export default CustomButton