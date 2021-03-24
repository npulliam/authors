const express = require("express");
const cors = require("cors");
const port = 8000;
const dbName = "authorsdb"

require("./config/mongoose.config")(dbName);

const app = express();

// req.body undefined without this!
app.use(express.json());
app.use(cors());


require("./routes/author.routes")(app);

app.listen(port, () =>
console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);
