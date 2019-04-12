// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection("mysql://r313lxi9y4ek45xp:nmerzqyz9rbgoxfz@gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/mr9ippr1m29aiuce");

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;


// {
//   host: "localhost",
//   port: 8889,
//   user: "root",
//   password: "root",
//   database: "burger_db"
// }