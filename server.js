const db = require("./db");
const express =
require("express");

const app = express();

db.run(`
CREATE TABLE IF NOT EXISTS artworks(

id INTEGER PRIMARY KEY AUTOINCREMENT,

title TEXT,
student TEXT,
class TEXT,
image TEXT

)
`);

app.use(
express.static(__dirname)
);

app.get("/artworks",

(req,res)=>{

db.all(
"SELECT * FROM artworks",

[],

(err, rows)=>{

res.json(rows);

});

});

app.listen(3000, ()=>{

console.log(
"Server started"
);

});