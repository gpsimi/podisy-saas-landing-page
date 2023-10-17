import React from 'react'
import classNames from 'classnames';

const SecondaryButton = ({children, href, className, onClick, ...props}) => {
    const cx = classNames ([
      "text-white bg-transparent py-4 px-8 rounded-xl font-bold border-white border hover:bg-white hover:text-primary duration-700",
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