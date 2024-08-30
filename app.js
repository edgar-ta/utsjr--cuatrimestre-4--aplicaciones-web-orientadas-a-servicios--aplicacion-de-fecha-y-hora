const express = require("express");
const dotenv = require("dotenv");

const routes = require("./routes");
const path = require("path");

dotenv.config();

const app = express();
const port = process.env["PORT"] || 3_000;

app.set("view engine", "ejs")
app.use(routes);
app.use("/web", express.static(path.join(__dirname, "web")));
app.use((request, response, next, error) => {
    console.log(error.stack);
    response.render("error");
})

app.listen(port, () => console.log(`http://localhost:${port}`));
