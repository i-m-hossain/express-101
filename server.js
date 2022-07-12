const express = require("express");

const config = require("./config");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

//express app
const app = express();

//HTTP methods
app.use("/", indexRouter);
app.use("/user", usersRouter);

// start server
app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}`);
});
