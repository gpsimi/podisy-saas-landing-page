import React from 'react'
import classNames from 'classnames';

const SecondaryButton = ({children, href, className, onClick, ...props}) => {
    const cx = classNames ([
      // "text-white bg-transparent border px-8 py-4 max-sm:px-4 max-sm rounded-xl flex hover:text-primary hover:bg-white font-bold duration-700",
      "text-white bg-transparent border py-1 px-2 md:py-3 md:px-5 flex items-center rounded-lg duration-700  hover:bg-white hover:text-primary",
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

export default SecondaryButton