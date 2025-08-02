const {MongoClient} = require('mongodb');
//const {mongoConn} = require('./connectionDetails');


// Read credentials securely from the environment variables
const userid = encodeURIComponent(process.env.DB_USER);
const password = encodeURIComponent(process.env.DB_PASS);

const conString = `mongodb+srv://${userid}:${password}@cluster.ytiwmnz.mongodb.net/TestTodoApp?retryWrites=true&w=majority&appName=Cluster`;
//const conString = `mongodb+srv://${mongoConn.userid}:${mongoConn.password}@azure-cluster.qmuovmn.mongodb.net/?retryWrites=true&w=majority&appName=azure-cluster`

const client =  new MongoClient(conString);

let db;


const connect = async () =>{
   await client.connect();
   db = client.db('notesApp'); 
   console.log("Mongo db is connected...");
}

const getDb = ()=>{
    if (!db){
        connect();
    }
    return db;
}

module.exports = {connect, getDb};
