import React from 'react'

function Button({style}) {
  return (
    <button className={`py-4 px-6 bg-blue-gradient text-[18px] outline-none text-primary rounded-[12px] font-poppins font-medium ${style}`}>
        Get Started
    </button>
  )
}

export default Button