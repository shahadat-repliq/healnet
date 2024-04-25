import * as yup from "yup";

const phoneFormat = /^(01[3-9])(\d{8})$/;

export const loginFormSchema = yup
    .object()
    .shape({
        phone: yup
            .string()
            .matches(phoneFormat, "Invalid phone number")
            .required(),
        password: yup
            .string()
            .min(6, "Password should contains 6 letters or more")
            .required()
    });
export const registerFormSchema = yup
    .object()
    .shape({
        email: yup
            .string()
            .email("Please use a valid email")
            .required(),
        phone: yup
            .string()
            .matches(phoneFormat, "Invalid phone number")
            .required(),
        password: yup
            .string()
            .min(6, "Password should contains 6 letters or more")
            .required(),
        confirm_password: yup
            .string()
            .oneOf([yup.ref("password")], "Password did not match")
            .required("confirm password is required")
    });

export const contactFormSchema = yup
    .object()
    .shape({
        name: yup
            .string()
            .required(),
        email: yup
            .string()
            .email("Please use a valid email")
            .required(),
        phone: yup
            .string()
            .matches(phoneFormat, "Invalid phone number")
            .required(),
        message: yup
            .string()
            .required()
    })