import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1440px] overflow-hidden mx-auto px-3 md:px-10 lg:px-0 ${className}`}>
        {children}
    </div>
  )
}

export default Container