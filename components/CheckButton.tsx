'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export type CheckboxProps = {
  id: string;
  checked: boolean;
  onChange: () => void;
  /** now supports JSX so we can include a <br/> */
  label?: React.ReactNode;
};

export default function Checkbox({
  id,
  checked,
  onChange,
  label,
}: CheckboxProps) {
  return (
    <label htmlFor={id} className="flex items-start space-x-2 cursor-pointer select-none">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div className="w-5 h-5 border-2 border-rose-800 rounded-sm flex items-center justify-center">
        <AnimatePresence>
          {checked && (
            <motion.svg
              key="check"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <path
                d="M11.78 6.28L7.28 10.78C7.14 10.92 6.95 11 6.75 11C6.55 11 6.36 10.92 6.22 10.78L4.22 8.78C4.09 8.64 4.02 8.45 4.02 8.26C4.02 8.06 4.1 7.88 4.24 7.74C4.38 7.6 4.56 7.52 4.76 7.52C4.95 7.52 5.14 7.59 5.28 7.72L6.75 9.19L10.72 5.22C10.86 5.09 11.05 5.01 11.24 5.02C11.44 5.02 11.62 5.1 11.76 5.24C11.9 5.38 11.98 5.56 11.98 5.76C11.98 5.95 11.91 6.14 11.78 6.28Z"
                fill="#D80000"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
      {label && <div className="text-sm text-gray-700">{label}</div>}
    </label>
  );
}
