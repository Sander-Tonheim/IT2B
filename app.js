const express = require("express");
const app = express();
const { createConnection } = require("./database/database.js");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
	const connection = await createConnection();
	const [results] = await connection.query("SELECT * FROM car");
	console.log(results[0].brand);

	res.render("index", {
		title: "Hjemme side",
		heading: "Hjemme side",
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		title: "Om oss",
		heading: "Om oss",
	});
});

const port = 3000;
app.listen(port, () => {
	console.log(`Denne serveren kjører på port ${port}`);
});
