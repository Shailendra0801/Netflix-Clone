import React from "react";
import { Container, Error, Title, Text, TextSmall, Link, Input, Submit, Base } from "./styles/form";

export default function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Form.Container = function FormContainer({children, ...restProps}) {
    <Container {...restProps}>{childern}</Container>
}; 

Form.Base = function FormBase({children, ...restProps}) {
    <Base {...restProps}>{childern}</Base>
};

Form.Error = function FormError({children, ...restProps}) {
    <Error {...restProps}>{childern}</Error>
};

Form.Title = function FormTitle({children, ...restProps}) {
    <Title {...restProps}>{childern}</Title>
};

Form.Text = function FormText({children, ...restProps}) {
    <Text {...restProps}>{childern}</Text>
};

Form.TextSmall = function FormTextSmall({children, ...restProps}) {
    <TextSmall {...restProps}>{childern}</TextSmall>
};

Form.Link = function FormLink({children, ...restProps}) {
    <Link {...restProps}>{childern}</Link>
};

Form.Input = function FormInput({children, ...restProps}) {
    <Input {...restProps}>{childern}</Input>
};

Form.Submit = function FormSubmit({children, ...restProps}) {
    <Submit {...restProps}>{childern}</Submit>
};