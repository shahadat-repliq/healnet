import Image from "next/image";
import { components } from "react-select";

export const colourOptions = [
    {
        value: "ocean",
        label: "Ocean",
        color: "#00B8D9",
        isFixed: true
    }, {
        value: "blue",
        label: "Blue",
        color: "#0052CC",
        isDisabled: true
    }, {
        value: "purple",
        label: "Purple",
        color: "#5247AA"
    }, {
        value: "red",
        label: "Red",
        color: "#FF5630",
        isFixed: true
    }, {
        value: "orange",
        label: "Orange",
        color: "#FF8B00"
    }, {
        value: "yellow",
        label: "Yellow",
        color: "#FFC400"
    }, {
        value: "green",
        label: "Green",
        color: "#36B37E"
    }, {
        value: "forest",
        label: "Forest",
        color: "#00875A"
    }, {
        value: "slate",
        label: "Slate",
        color: "#253858"
    }, {
        value: "silver",
        label: "Silver",
        color: "#666666"
    }
];
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
        ...styles
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