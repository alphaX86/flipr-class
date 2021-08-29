import React from "react";
import { Pane, Heading } from "evergreen-ui";

function Footer() {
    return (
        <Pane alignContent = "bottom" background="tint2" paddingBottom={0} paddingLeft={0}>
            <Heading size={700}>
                Developed by Syntax Squad from MIT
            </Heading>
        </Pane>
    )
}

export default Footer;