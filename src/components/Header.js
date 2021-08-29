import React from "react";
import { Pane, Heading } from "evergreen-ui";

function Header() {
    return (
        <Pane alignContent = "center" background="tint1" paddingTop={0}>
            <Heading size={1200}>
                Flipr Classroom
            </Heading>
        </Pane>
    )
}

export default Header;