//INCOMPLETE LOOK AT TEST_SCRIPT.js FOR THE COMPLETE VERSION

var args = process.argv.slice(2)

if(args[0]){
  console.log("Searching...");
  client.query(`SELECT * FROM famous_people WHERE last_name = '${args[0]}'`, (err, result) =>{
    if(err){
      return console.error("error running query", err);
    }
    console.log(`Found ${result.rowCount} person`);

  })
}
else if(!args[0]){
  console.log("Person you searched for does not exist. Try again.");
}