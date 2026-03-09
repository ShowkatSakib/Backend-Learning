const app = require("./app");   //imports the Express application from another file called app.js

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
