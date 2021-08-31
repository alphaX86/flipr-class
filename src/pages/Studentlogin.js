import React, { useEffect, useState } from "react";
import "../css/login.css";
import { Link, Redirect } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { TextInputField, Button } from "evergreen-ui";
import Header from "../components/Header";


import { useMongoDB } from "../providers/mongodb";
import { useRealmApp } from "../providers/realm";

import * as Realm from "realm-web";

const app = new Realm.App(process.env.REACT_APP_REALM_NAME);
const client_id = process.envREACT_APP_GOOGLE;

function Form(props) {

    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
    const loginProps = useSpring({ 
      left: registrationFormStatus ? -500 : 0, // Login form sliding positions
    });
  
    const loginBtnProps = useSpring({
      borderBottom: registrationFormStatus 
        ? "solid 0px transparent"
        : "solid 2px #1059FF",  //Animate bottom border of login button
    });
  
    function loginClicked() {
      setRegistartionFormStatus(false);
    }
  
    return (
  
      <div>
          <Header />
      <div className="login-register-wrapper">
        <div className="nav-buttons">
          <animated.button
            style={loginBtnProps}
          >
            Student Login
          </animated.button>
        </div>
        <div className="form-group">
            <TextInputField
                        label="Username"
                        required
                        placeholder="xyz@zyx.com"
                        onChange={(e) => props.setEmail(e.target.value)}
                        value={props.email}
            />
            <TextInputField
                        label="Password"
                        required
                        placeholder="**********"
                        type="password"
                        onChange={(e) => props.setPassword(e.target.value)}
                        value={props.password}
            />
            <Button appearance="primary" onClick={props.handleLogIn}>
                    Log in
            </Button>
            <Button appearance="primary" intent="danger" onClick={GoogleO}>
                    Login via Google
            </Button>
        </div>
      </div>
      </div>
    );
}

async function GoogleO()
{
// The redirect URI should be on the same domain as this app and
// specified in the auth provider configuration.
const redirectUri = "https://stitch.mongodb.com/api/client/v2.0/auth/callback";
const credentials = Realm.Credentials.google(redirectUri);
// Calling logIn() opens a Google authentication screen in a new window.
app.logIn(credentials).then(user => {
  // The logIn() promise will not resolve until you call `handleAuthRedirect()`
  // from the new window after the user has successfully authenticated.
  console.log(`Logged in with id: ${user.id}`);
})
// When the user is redirected back to your app, handle the redirect to
// save the user's access token and close the redirect window. This
// returns focus to the original application window and automatically
// logs the user in.
Realm.handleAuthRedirect();
<Redirect to="/dashboard-teacher" />
}

function StudentLogin() {
    const { logIn, logOut, user } = useRealmApp()
    const { db } = useMongoDB()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [students, setstudents] = useState([])

    useEffect(() => {
        async function wrapstudentQuery() {
            if (user && db) {
                const authoredStudents = await db.collection("students").find()
                setstudents(authoredStudents)
            }
        }
        wrapstudentQuery()
    }, [user, db])

    async function handleLogIn() {
        await logIn(email, password)
    }

    return user && db && user.state === "active" ? (
        <Redirect to="/dashboard-student" />
    ) : (
        <Form
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogIn={handleLogIn}
        />
    )
}

export default StudentLogin;