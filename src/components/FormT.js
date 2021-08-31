import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useMongoDB } from "../providers/mongodb"
import { useRealmApp } from "../providers/realm"
import { Button, Heading, Pane, Table, TextInputField } from "evergreen-ui"
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

function DataFetch(props) {
    return (
        <Pane alignItems="center" justifyContent="center" display="flex" paddingTop={50}>
            <Pane width="50%" padding={16} background="purpleTint" borderRadius={3} elevation={4}>
                <Table>
                    <Table.Head>
                        <Table.TextHeaderCell>Roll No</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Subject</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Mark</Table.TextHeaderCell>
                    </Table.Head>
                    <Table.Body height={240}>
                        {props.marks.map((nam) => (
                            <Table.Row key={nam._id}>
                                <Table.TextCell>{nam.rollno}</Table.TextCell>
                                <Table.TextCell>{nam.subject}</Table.TextCell>
                                <Table.TextCell>{nam.mark}</Table.TextCell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Pane>
        </Pane>
    )
}

function TestT(){
    
    const { logIn, logOut, user } = useRealmApp()
    const { db } = useMongoDB()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [classX, setclass] = useState([])

    useEffect(() => {
        async function wrapclassQuery() {
            if (user && db) {
                const authoredMarks = await db.collection("marks").find()
                setclass(authoredMarks)
            }
        }
        wrapclassQuery()
    }, [user, db])
    
        return user && db && user.state === "active" ? (
            <div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Tests</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                  <Link to="/dashboard-student">Home</Link></li>
              <li className="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    <DataFetch marks={classX} user={user} />

    <Pane alignItems="center" justifyContent="center" display="flex" paddingTop={50}>
            <Pane width="50%" padding={16} background="purpleTint" borderRadius={3} elevation={4}>
                <Heading size={800} marginTop="10" marginBottom="10">
                    Test Form
                </Heading>
                <Pane>
                    <TextInputField
                        label="Roll No"
                        required
                        placeholder="5261"
                    />
                </Pane>
                <Pane>
                    <TextInputField
                        label="Subject"
                        required
                        placeholder="CS"
                    />
                </Pane>
                <Pane>
                    <TextInputField
                        label="Marks"
                        required
                        placeholder="87"
                    />
                </Pane>
                <Button appearance="primary">
                    Submit
                </Button>
            </Pane>
        </Pane>
    {/* /.content-header */}
    {/* Main content */}
    
    {/* /.content */}
  </div>
</div>

        ) : (
            <Redirect to="/" />
        )
}

export default TestT