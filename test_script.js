const pg = require("pg");
const settings = require("./settings");

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port
});



client.connect((err) =>{
  if(err){
    return console.error("Connection Error", err);
  }
//   client.query("SELECT $1::int AS number", ["1"], (err, result) => {
//     if (err){
//       return console.error("error running query", err);
//     }
//     console.log(result.rows[0].number);
//     client.end();
//   });
// });



var args = process.argv.slice(2)

if(args[0]){
  console.log("Searching...");
  client.query(`SELECT * FROM famous_people WHERE last_name = '${args[0]}'`, (err, result) =>{
    if(err){
      return console.error("error running query", err);
    }
    var data = result.rows;
    data.forEach(function(currentValue){
    console.log(`Found ${result.rowCount} person`);
    console.log(`${currentValue.id} : ${currentValue.first_name} ${currentValue.last_name}, born ${currentValue.birthdate.toLocaleString().slice(0, 9)}`);
    });
    client.end();

  });
}
else if(!args[0]){
  console.log("Person you searched for does not exist. Try again.");
  }

});