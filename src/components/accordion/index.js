import React, { useState, useContext, createContext } from "react";
import { Container, Inner, Title, Header, Body, Item } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
    return (
        <Container>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                <img src="images/icons/close-slim.png" alt="Close" />
            )
            :  (
                <img src="images/icons/add.png" alt="Open" />
            )

            }
        </Header>
    );
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);

    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}