const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*
CRUD
CREATE
READ
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

// let sql = `
// CREATE TABLE IF NOT EXISTS Users(
//     ID TEXT PIMIARY KET,
//     Username TEXT,
//     Emali TEXT,
//     DOB TEXT
// );
// `
let sql = ` SELECT name FROM pragma_table_info("User");`

let sql2 =`
ALTER TABLE Users
RENAME COLUMN Email to Emali
`

let sql3 = `
INSERT INTO Users(ID,Username,Emali,DOB)
VALUES("1234567","Timmy","timmy@failure.org","2005-10-28");
`
let sql4 =`SELECT * FROM Users;
`
let sql5 =`
SELECT * FROM Users
WHERE ID = "1234567";
`
let sql6 =`
UPDATE Users
SET Emali = "timmy@success.org"
WHERE ID = "1234567";
`
db.all(sql6,CallbackFunc);
