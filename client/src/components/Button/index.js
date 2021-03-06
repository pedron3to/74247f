import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  primary: {
    width: 160,
    height: 56,
    borderRadius: 3,
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 600,
    background: '#3A8DFF',
    color: '#fff',
    border: 'none',
  },
  secondaryLogin: {
    width: 170,
    height: 54,
    fontSize: 14,
    borderRadius: 5,
    lineHeight: '19.07px',
    fontWeight: 600,
    color: '#3A8DFF',
    background: '#fff',
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.08)',
    border: 'none',
  },
  secondarySignup: {
    width: 140,
    height: 54,
    borderRadius: 5,
    fontSize: 14,
    lineHeight: '19.07px',
    fontWeight: 600,
    color: '#3A8DFF',
    background: '#fff',
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.08)',
    border: 'none',
  },
}));

const Button = ({ title, variant, type, onClick }) => {
  const classes = useStyles();

  return (
    <button
      className={`
      ${variant === 'primary' && classes.primary}  
      ${variant === 'secondarySignup' && classes.secondarySignup}
      ${variant === 'secondaryLogin' && classes.secondaryLogin}
      `}
      type={type}
      onClick={onClick}
      aria-label={title}
    >
      {title}
    </button>
  );
};

export default Button;
