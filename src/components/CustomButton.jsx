import React from 'react'

const CustomButton = ({title, style, btnType}) => {
  return (
    <button type={btnType} className={`px-8 cursor-pointer py-2.5 ${style}`}>
        {title}
    </button>
  )
}

export default CustomButton