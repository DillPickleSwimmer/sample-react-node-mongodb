require("dotenv-flow").config();

console.log(`Running in environment: ${process.env.NODE_ENV}`);

/***** DATABASE *****/

require("./initDB");

/***** ROUTING *****/

const app = require("./initRoutes");

/***** START SERVER *****/
const PORT = parseInt(process.env.PORT, 10) || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.export = app;
