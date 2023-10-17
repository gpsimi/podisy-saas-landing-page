import React from 'react'
import classNames from 'classnames'


const PrimaryButton = ({children, href, className, onClick, ...props}) => {
    const cx = classNames ([
        "text-primary bg-buttonColor py-3 px-5 rounded-xl font-bold border-white border hover:bg-transparent hover:text-white duration-700 max-lg:",
        className
    ]);
    return (
    <a
        href={href}
        className={cx}
        onClick={onClick}
        {...props}
    >
        {children}
    </a>
  )
}

export default PrimaryButton