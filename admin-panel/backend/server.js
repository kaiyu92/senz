const app = require('./index');
const db = require('./db/index');

//Set Port
const PORT = process.env.PORT || 3001;

//Connect to DB
db.connect()
	.then(() => {
		//Start server listening on port 3001
		app.listen(PORT, function(){
			console.log(`Server running on Port ${PORT} ...`);
		});		
	});