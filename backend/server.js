const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: "config/.env" });
require("./config/db");
const routers = require("./routes/route");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/candidature", routers);
const port = 8082;

app.listen(port, () => {
  console.log("server is runnig... ");
});
