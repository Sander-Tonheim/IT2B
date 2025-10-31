const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
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
