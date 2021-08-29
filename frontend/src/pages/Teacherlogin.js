import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Pane, Table, TextInputField } from "evergreen-ui";

import { useMongoDB } from "../providers/mongodb";
import { useRealmApp } from "../providers/realm";

function LogInForm(props) {
    return (
        <Pane alignItems="center" justifyContent="center" display="flex" paddingTop={50}>
            <Pane width="50%" padding={16} background="red300" borderRadius={3} elevation={4}>
                <Heading size={800} marginTop="10" marginBottom="10">
                    Welcome Back!
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

function teacherList(props) {
    return (
        <Pane alignItems="center" justifyContent="center" display="flex" paddingTop={50}>
            <Pane width="50%" padding={16} background="red300" borderRadius={3} elevation={4}>
                <Table>
                    <Table.Head>
                        <Table.TextHeaderCell>Title</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Plot</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Rating</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Year</Table.TextHeaderCell>
                    </Table.Head>
                    <Table.Body height={240}>
                        {props.teachers.map((teacher) => (
                            <Table.Row key={teacher._id}>
                                <Table.TextCell>{teacher.title}</Table.TextCell>
                                <Table.TextCell>{teacher.plot}</Table.TextCell>
                                <Table.TextCell>{teacher.rated}</Table.TextCell>
                                <Table.TextCell isNumber>{teacher.year}</Table.TextCell>
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

function TeacherLogin() {
    const { logIn, logOut, user } = useRealmApp()
    const { db } = useMongoDB()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [teachers, setteachers] = useState([])

    useEffect(() => {
        async function wrapteacherQuery() {
            if (user && db) {
                const authoredteachers = await db.collection("teachers").find()
                setteachers(authoredteachers)
            }
        }
        wrapteacherQuery()
    }, [user, db])

    async function handleLogIn() {
        await logIn(email, password)
    }

    return user && db && user.state === "active" ? (
        <teacherList teachers={teachers} user={user} logOut={logOut} />
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

export default TeacherLogin;