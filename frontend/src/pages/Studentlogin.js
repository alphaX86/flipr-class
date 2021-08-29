import React from "react";

async function main() {
    
    const { MongoClient } = require('mongodb');
    const uri = "mongodb+srv://admin:Aadhi#1234@cluster-flipr.vds6n.mongodb.net/flipr_class?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
    const collection = client.db("flipr_class").collection("students");
    // perform actions on the collection object
    client.close();
    });

}
class StudentLogin extends React.Component {
    render() {
        return (
            <p>This is just a sample text for student</p>
        )
    }
}

export default StudentLogin;