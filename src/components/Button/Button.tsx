import React, { FC } from 'react';
import cn from 'clsx';
import './Button.css';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Button: FC<ButtonProps> = ({ className, ...props }) => (
  <button className={cn('Button', className)} {...props} />
);
