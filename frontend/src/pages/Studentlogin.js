import React, { useEffect, useState } from "react";
import { Button, Heading, Pane, Table, TextInputField } from "evergreen-ui";
import { Link } from "react-router-dom";

import { useMongoDB } from "../providers/mongodb";
import { useRealmApp } from "../providers/realm";

function LogInForm(props) {
    return (
        <Pane alignItems="center" justifyContent="center" display="flex" paddingTop={50}>
            <Pane width="50%" padding={16} background="green300" borderRadius={3} elevation={4}>
                <Heading size={800} marginTop="10" marginBottom="10">
                    Welcome back!
                </Heading>
                <Pane>
                    <TextInputField
                        label="Username"
                        required
                        placeholder="mongodb@example.com"
                        onChange={(e) => props.setEmail(e.target.value)}
                        value={props.email}
                    />
                </Pane>
                <Pane>
                    <TextInputField
                        label="Password"
                        required
                        placeholder="**********"
                        type="password"
                        onChange={(e) => props.setPassword(e.target.value)}
                        value={props.password}
                    />
                </Pane>
                <Button appearance="primary" onClick={props.handleLogIn}>
                    Log in
                </Button>
                <Link to="/">
                    <Button>
                        Go back
                    </Button>
                </Link>
            </Pane>
        </Pane>
    )
}

function studentList(props) {
    return (
        <Pane alignItems="center" justifyContent="center" display="flex" paddingTop={50}>
            <Pane width="50%" padding={16} background="green300" borderRadius={3} elevation={4}>
                <Table>
                    <Table.Head>
                        <Table.TextHeaderCell>Title</Table.TextHeaderCell>
                        <Table.TextHeaderCell>RegNo</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Area</Table.TextHeaderCell>
                        <Table.TextHeaderCell>UserName</Table.TextHeaderCell>
                    </Table.Head>
                    <Table.Body height={240}>
                        {props.students.map((student) => (
                            <Table.Row key={student._id}>
                                <Table.TextCell>{student.name}</Table.TextCell>
                                <Table.TextCell>{student.regno}</Table.TextCell>
                                <Table.TextCell>{student.city}</Table.TextCell>
                                <Table.TextCell isNumber>{student.username}</Table.TextCell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>

                <Button
                    height={50}
                    marginRight={16}
                    appearance="primary"
                    intent="danger"
                    onClick={props.logOut}
                >
                    Log Out
                </Button>
            </Pane>
        </Pane>
    )
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
                const authoredstudents = await db.collection("students").find()
                setstudents(authoredstudents)
            }
        }
        wrapstudentQuery()
    }, [user, db])

    async function handleLogIn() {
        await logIn(email, password)
    }

    return user && db && user.state === "active" ? (
        <studentList students={students} user={user} logOut={logOut} />
    ) : (
        <LogInForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogIn={handleLogIn}
        />
    )
}

export default StudentLogin;