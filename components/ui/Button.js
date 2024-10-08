import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className, transparent, disabled, type }) => {
    return (
        <button
            className={`px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 font-semibold text-sm sm:text-base rounded-full transition-all duration-100 flex flex-row items-center justify-center
                ${transparent ? 'bg-transparent text-[#2c2c2c] dark:text-white' : 'bg-neutral-900 dark:bg-white text-white dark:text-[#2c2c2c]'}
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
                ${className}`}
            type={type}
            aria-disabled={disabled}
        >
            {children}  
        </button>
    );
};

export default Button;
