import dotenv from 'dotenv'
import app from './app.js'
import ConnectDB from './db/connect.js';


//Path to Environments variables in .env File confidential
dotenv.config({
    path:'./.env',
});

const Port=`${process.env.PORT}`||3000;

ConnectDB()
.then(()=>{
    app.listen(Port,()=>{
        console.log("Server Online at PORT:",Port);
    })
}).catch((error)=>{
    console.log("Error Server Offline",error);
});
