import React from 'react'
import classNames from 'classnames'


const PrimaryButton = ({children, href, className, onClick, ...props}) => {
    const cx = classNames ([
        // "text-primary bg-buttonColor border px-8 py-4 rounded-xl flex hover:text-white hover:bg-primary font-bold duration-700 max-md:px- max-md:py-2 max-md:text-[10px]",
        "text-primary bg-buttonColor border py-1 px-2 md:py-2 md:px-3 flex items-center rounded-lg duration-700  hover:bg-primary hover:text-white",
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