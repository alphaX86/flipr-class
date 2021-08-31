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
                        <Table.TextHeaderCell>Class Name</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Meet ID</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Pass</Table.TextHeaderCell>
                        <Table.TextHeaderCell>Time</Table.TextHeaderCell>
                    </Table.Head>
                    <Table.Body height={240}>
                        {props.class.map((nam) => (
                            <Table.Row key={nam._id}>
                                <Table.TextCell>{nam.class}</Table.TextCell>
                                <Table.TextCell>{nam.meet}</Table.TextCell>
                                <Table.TextCell>{nam.pass}</Table.TextCell>
                                <Table.TextCell isNumber>{nam.time}</Table.TextCell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Pane>
        </Pane>
    )
}

function ClassX(){
    
    const { logIn, logOut, user } = useRealmApp()
    const { db } = useMongoDB()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [classX, setclass] = useState([])

    useEffect(() => {
        async function wrapclassQuery() {
            if (user && db) {
                const authoredClass = await db.collection("class").find()
                setclass(authoredClass)
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
            <h1 className="m-0">Classes</h1>
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
    <DataFetch class={classX} user={user} />
    {/* /.content-header */}
    {/* Main content */}
    
    {/* /.content */}
  </div>
</div>

        ) : (
            <Redirect to="/" />
        )
}

export default ClassX