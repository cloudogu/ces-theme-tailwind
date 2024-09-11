import * as Yup from "yup";
import useFormHandler from "@src/deprecated_hooks/useFormHandler";
import {Form} from "@src/deprecated_components/forms";
import H1 from "@src/deprecated_components/text/H1";
import { Button } from "@src/index";

export default {
    title: 'Old CES Theme/Form elements/Form',
    component: Form
}

// @ts-ignore
const Template = function (args) {
    const validationSchema = Yup.object({
                                            "surname": Yup.string().required('Surname is required.'),
                                            "displayname": Yup.string().required('Display name is required.'),
                                            "mail": Yup.string()
                                                .matches(/[a-zA-Z._-]*@[a-zA-Z-]*\.[a-zA-Z-]/, "E-mail address is invalid.")
                                                .required('Mail is required.'),
                                            "password": Yup.string()
                                                .matches(/[A-ZÄÖÜ]/, 'The password must contain at least 1 capital letter')
                                                .matches(/[0-9]/, 'The password must contain at least 1 number')
                                                .matches(/[^a-zäöüßA-ZÄÖÜ0-9]/, 'The password must contain at least 1 special character')
                                                .matches(/^.{8,}$/, 'The password must contain at least 8 characters')
                                                .matches(/[a-zäöüß]/, 'The password must contain at least 1 lower case letter'),
                                            "password_confirm": Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
                                            "user_description": Yup.string()
                                                .matches(/^.*Lorem.*ipsum.*$/, "Must be lorem ipsum like.")
                                                .required('User Description is required.'),
                                            "must_change_password": Yup.boolean()
                                                .oneOf([true], "Must be checked.")
                                        });

    const handler = useFormHandler<any>({
                                            initialValues: {
                                                "username": "admin",
                                                "givenname": "Admin",
                                                "surname": "Admin",
                                                "displayname": "Admin Admin",
                                                "mail": "admin@admin.admin",
                                                "password": "adminpassword$A1",
                                                "password_confirm": "adminpassword$A1",
                                                "user_description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
                                                "must_change_password": true,
                                            },
                                            validationSchema: validationSchema,
                                            onSubmit: values => {
                                                alert(JSON.stringify(values, null, 2));
                                                handler.resetForm();
                                            },
                                            enableReinitialize: true,
                                        })
    return (
        <Form {...args} handler={handler}>
            <H1>Account</H1>

            <Form.ValidatedTextInput
                type={"text"}
                name={"givenname"}>
                Given name
            </Form.ValidatedTextInput>
            <Form.ValidatedTextInput
                type={"text"}
                name={"surname"}>
                Surname
            </Form.ValidatedTextInput>
            <Form.ValidatedTextInput
                type={"text"}
                name={"displayname"}>
                Display Name
            </Form.ValidatedTextInput>
            <Form.ValidatedTextInput
                type={"text"}
                name={"mail"}>
                E-Mail
            </Form.ValidatedTextInput>
            <Form.ValidatedTextInput
                type={"password"}
                name={"password"}>
                Password
            </Form.ValidatedTextInput>
            <Form.ValidatedTextInput
                type={"password"}
                name={"password_confirm"}>
                Confirm Password
            </Form.ValidatedTextInput>
            <Form.ValidatedTextArea name={"user_description"}>
                User Description
            </Form.ValidatedTextArea>
            <div className={"mt-4"}>
                <Button variant={"primary"} type={"submit"} disabled={!handler.dirty}>Save</Button>
            </div>
        </Form>
    );
}
export const Primary = Template.bind({})
// @ts-ignore
Primary.args = {}
