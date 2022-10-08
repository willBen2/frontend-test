// This component is just wrapper for text
// It's easier to change the css in one single place and if we need to define our own interface is easier too
// We can create all variations here (h1, p, span) and if later we need to apply a design system is easier
import React, { HTMLAttributes } from 'react';

interface TextProps extends HTMLAttributes<HTMLElement> {
}

const Text: React.FC<TextProps> = (props: TextProps) => {
  return (
    // just returning a span for now
    <span {...props} />
  );
}

export default Text;
