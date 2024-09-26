import React from 'react';

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return <input
        {...props}
        className=
        "w-full min-w-40 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
    />;
};

export default Input;