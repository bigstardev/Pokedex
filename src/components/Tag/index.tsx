import React, { CSSProperties, FC } from 'react';
import './Tag.scss';
interface TagProps {
    size?: string;
    color?: string;
    label: string;
    style?: CSSProperties;
}
export const Tag: FC<TagProps> = ({ size, color, label, style }) => {
    const sizeClassName = size ? `Tag__size-${size}` : 'Tag__size-small';
    const colorClassName = color ? `Tag__color-${color}` : '';

    return (
        <div className={`Tag ${colorClassName} ${sizeClassName}`} style={style}>
            {label}
        </div>
    );
};
