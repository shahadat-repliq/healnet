import Image from "next/image";
import { components } from "react-select";

export const colourStyles = {
    control: (styles, {isFocused}) => ({
        ...styles,
        backgroundColor: "#E2EDE9",
        padding: 8,
        borderRadius: 16,
        boxShadow: "none",
        border: "none"
    }),
    menuList: (styles) => ({
        ...styles,
        padding: 8,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        overflowY: "auto",
        borderRadius: 12,
        backgroundColor: "#E2EDE9",
        color: "green"
    }),
    menu: (base) => ({
        ...base,
        zIndex: 10,
        borderRadius: 16,
        boxShadow: "none",
        backgroundColor: "transparent"
    }),

    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
        return {
            ...styles,
            padding: 8,
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                    ? "#274539"
                    : isFocused
                        ? "#B5D9CC"
                        : undefined,
            cursor: isDisabled
                ? "not-allowed"
                : "default",
            borderRadius: 8
        };
    },
    input: (styles) => ({
        ...styles,
        color: 'green'
    }),
    placeholder: (styles) => ({
        ...styles,
        color: "green"
    }),
    singleValue: (styles, {data}) => ({
        ...styles,
        color: "#017A4B"
    })
};

export const DropdownIndicator = props => {
    return (components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
            {
                props.selectProps.menuIsOpen
                    ? <Image
                            src={'/assets/icons/Expand Arrow.png'}
                            className='rotate-180'
                            width={20}
                            height={20}
                            alt='chevron'/>
                    : <Image
                            width={20}
                            height={20}
                            src={'/assets/icons/Expand Arrow.png'}
                            alt='chevron'/>
            }
        </components.DropdownIndicator>
    ));
};