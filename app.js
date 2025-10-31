const express = require("express");
const app = express();
console.log("hei dette er en endring");

app.set("view engine", "ejs");
app.use(express.static("public"));

async function getCatFact() {
	const response = await fetch("https://catfact.ninja/fact");
	if (!response.ok) {
		return;
	}
	console.log(response);

	const data = await response.json();
	console.log(data);
}

console.log("hei dette er en anne endring hei heih");
app.get("/", async (req, res) => {
	const fact = await getCatFact();
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
