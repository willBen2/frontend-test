import React, { ReactNode } from 'react';

interface DropdownProps {
  children: ReactNode[];
  className?: string;
}

export default function Dropdown({ children, className }: DropdownProps) {
  if (!children || !children.length) {
    return null;
  }
  return (
    <div className={["dropdown-container", className].join(' ')}>
      {children}
    </div>
  )
}
