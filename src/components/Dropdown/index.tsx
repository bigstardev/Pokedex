import React, { FC } from 'react';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import './DropDown.scss';

interface DropDownProps {
    label?: string;
    id?: string;
    open: boolean;
    handleOpen: () => void;
    options: Option[];
    selectedOption: Option;
    handleChange: (option: Option) => void;
}
interface Option {
    label: string;
    value: number;
}

const DropDown: FC<DropDownProps> = ({
    label,
    id,
    handleOpen,
    open,
    options,
    selectedOption,
    handleChange,
}) => {
    const toggling = () => handleOpen();
    const onOptionClicked = (option: Option) => () => {
        handleChange(option);
        handleOpen();
    };

    return (
        <div className="DropDown">
            <label
                htmlFor={id}
                className={`DropDown__label ${
                    open ? 'DropDown__label-focus' : ''
                } `}
            >
                {label}
            </label>
            <div
                onClick={toggling}
                className={`DropDown__header ${
                    open ? 'DropDown__header-focus' : ''
                }`}
                id={id}
            >
                {selectedOption.label}

                <Arrow
                    className={`DropDown__arrow ${
                        open ? 'DropDown__arrow-open' : ''
                    }`}
                />
            </div>
            <div className="DropDown__list-container">
                {open && (
                    <ul className={`DropDown__list`}>
                        {options.map((option) => (
                            <li
                                onClick={onOptionClicked(option)}
                                key={Math.random()}
                                value={option.value}
                                className={`DropDown__list-item ${
                                    option.value === selectedOption.value
                                        ? 'DropDown__list-item-active'
                                        : ''
                                }`}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DropDown;
