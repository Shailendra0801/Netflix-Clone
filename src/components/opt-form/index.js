import React from "react";
import {Container, Break, Input, Button, Text, Breakk} from  './styles/opt-form';


export default function OptForm({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

OptForm.Input = function OptFormInput({...restProps}){
    return <input {...restProps} type="email"/>
}

OptForm.Button = function OptFormButton({children, ...restProps}){
    return (
        <Button {...restProps}>
            {children}<img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}

OptForm.Text = function OptFormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

OptForm.Break = function OptFormBreak({ ...restProps }) {
    return <Break {...restProps} />;
  };

OptForm.Breakk = function OptFormBreakk({...restProps}) {
    return <Breakk {...restProps} />;
}