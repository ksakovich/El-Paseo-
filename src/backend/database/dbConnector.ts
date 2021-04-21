import { Connection, Request } from 'tedious';

//const  = tedious;

// Create connection to database
const config = {
    authentication: {
        options: {
            userName: process.env.DB_USER, //"username", // update me
            password: process.env.DB_PASS //"password" // update me
        },
        type: "default"
    },
    server: process.env.DB_SERVER, // update me
    options: {
        database: "el-paseoDB", //update me
        encrypt: true
    }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
// connection.on("connect", err =>
// {
//     if (err)
//     {
//         console.error(err.message);
//     } else
//     {

//         console.log("HERE WILL BE  DB CONNECTION");
//         queryDatabase();
//     }
// });

// function queryDatabase()
// {
//     console.log("Reading rows from the Table...");

//     // Read all rows from table
//     const request = new Request(
//         `SELECT * FROM items`,
//         (err, rowCount) =>
//         {
//             if (err)
//             {
//                 console.error(err.message);
//             } else
//             {
//                 console.log(`${rowCount} row(s) returned`);
//             }
//         }
//     );

//     request.on("row", columns =>
//     {
//         columns.forEach(column =>
//         {
//             console.log("%s\t%s", column.metadata.colName, column.value);
//         });
//     });

//     connection.execSql(request);
// }

export default connection;