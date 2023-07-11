const logger = require("./startup/logging");
const express = require("express");
const app = express();

require("dotenv").config();
require("./startup/educationDb")();
require("./startup/routes")(app);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} ....`));
