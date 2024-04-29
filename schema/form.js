import * as yup from "yup";

const phoneFormat = /^(01[3-9])(\d{8})$/;

export const loginFormSchema = yup
    .object()
    .shape({
        phone: yup
            .string()
            .matches(phoneFormat, "Invalid phone number")
            .required("Please type your phone number"),
        password: yup
            .string()
            .min(6, "Password should contains 6 letters or more")
            .required("Please type password")
    });
export const registerFormSchema = yup
    .object()
    .shape({
        email: yup
            .string()
            .email("Please use a valid email")
            .required("Please provide an email"),
        phone: yup
            .string()
            .matches(phoneFormat, "Invalid phone number")
            .required("Please type your phone number"),
        password: yup
            .string()
            .min(6, "Password should contains 6 letters or more")
            .required("Password is required"),
        confirm_password: yup
            .string()
            .oneOf([yup.ref("password")], "Password did not match")
            .required("Confirm password is required")
    });

export const contactFormSchema = yup
    .object()
    .shape({
        name: yup
            .string()
            .required("Please type your name"),
        email: yup
            .string()
            .email("Please use a valid email")
            .required("Please provide an email"),
        phone: yup
            .string()
            .matches(phoneFormat, "Invalid phone number")
            .required("Please type your phone number"),
        message: yup
            .string()
            .required("Write your message")
    })

export const appointmentSchema = yup
    .object()
    .shape({
        phone: yup
            .string()
            .matches(phoneFormat, "Invalid phone number")
            .required("Please type your number"),
        doctor: yup
            .string()
            .required(" Please select a doctor"),
        time: yup
            .string()
            .when('doctor', {
                is: val => !!val,
                then: (schema) => schema.required('Please select a timing'),
                otherwise: (schema) => schema.required("Need to select doctor first")
            })
    })