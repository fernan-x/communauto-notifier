import React from 'react';

const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button
        {...props}
        className='h-12 border-black border-2 p-2.5 bg-[#FFA6F6] hover:opacity-90 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]'
    >
        {children}
    </button>;
};

export default Button;