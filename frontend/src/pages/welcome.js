import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ManualIcon, Pane } from "evergreen-ui";

function WelcomeScreen() {
    return(
        <Pane alignItems="center" justifyContent="center" display="flex" paddingTop={200}>
            <Pane width="50%" padding={30} background="gray200" borderRadius={3} elevation={4}>
                <Link to="/student">
                    <Button appearance="primary" intent="none" iconBefore={ManualIcon} onClick="isLoading">
                        Student
                    </Button>
                </Link>
                <Link to="/teacher">
                    <Button appearance="primary" intent="danger" iconBefore={ManualIcon}>
                        Teacher
                    </Button>
                </Link>
            </Pane>
        </Pane>
    )
}

export default WelcomeScreen;