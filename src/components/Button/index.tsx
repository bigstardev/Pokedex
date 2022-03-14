import React, { FC, ReactNode } from 'react';
import './Button.scss';
interface ButtonProps {
    color?: string;
    size?: string;
    children: ReactNode;
    style?: object;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: FC<ButtonProps> = ({ color, size, children, style, onClick }) => {
    const colorClassName = color ? `Button__${color}` : 'Button__primary';
    const sizeClassName = size ? `Button__${size}` : 'Button__medium';
    return (
        <button
            className={`Button Button__outlined ${colorClassName} ${sizeClassName}`}
            style={style}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
