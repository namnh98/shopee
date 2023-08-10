import React from 'react';

const Button = (props) => {
  const { style, children, ...rest } = props;

  return (
    <button style={style} className="bg-transparent border border-0" {...rest}>
      {children}
    </button>
  );
};

export default Button;
