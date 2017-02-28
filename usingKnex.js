const settings = require("./settings");
//const pg = require("pg");

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});


knex.select().from('famous_people')
  .then((rows) =>{
    console.log(rows);
});

var firstName = process.argv.slice(2)
var lastName = process.argv.slice(3)
var dob = process.argv.slice(4)

knex.insert([{first_name: firstName, last_name: lastName, birthdate: dob}]).into('famous_people')
  .then(() =>{
    console.log("done");
    //console.log(rows);
  });