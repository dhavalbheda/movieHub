import React from "react";
import { Item, Inner, Container, Pane, Title, Subtitle, Image } from "./jumbotron";

export default function Jumbotron({ children, direction='row', ...restProps}) {
    return (
        <Item>
            <Inner direction={direction} {...restProps}>
            {children}
            </Inner>
        </Item>
        
    );
}
Jumbotron.Container = ({children, ...restProps}) => {
    return(<Container {...restProps}>{children}</Container>)
}

Jumbotron.Pane = ({children, ...restProps}) => {
    return(<Pane {...restProps}>{children}</Pane>)
}

Jumbotron.Title = ({children, ...restProps}) => {
    return(<Title {...restProps}>{children}</Title>)
}

Jumbotron.Subtitle = ({children, ...restProps}) => {
    return(<Subtitle {...restProps}>{children}</Subtitle>)
}

Jumbotron.Image = ({children, ...restProps}) => {
    return(<Image {...restProps} />)
}