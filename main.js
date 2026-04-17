const app = require('./app.js');

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// This conditional is here for testing purposes:
if (require.main === module) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, function(err) {
    if (err) console.log("Error in server setup");
    console.log("Server listening on port", PORT);
  })
}