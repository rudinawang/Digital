const express = require("express"); // requring or importing express package
const app = express(); // storing it in app, app vannay variable throughout use

// ejs use garna lako ho, k k chahinay ho env set gardey
app.set("view enigne", "ejs");

// slash(/) ma gayo vanay k dekhaunay
// re Request paxi Response hunai paryo
app.get("/", (req, res) => {
  // views folder vitra ko ejs file lai track garxa
  const name = "Rudra Nahawang";
  res.render("home.ejs", { name });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { firstname: "Saroj" });
});

app.get("/contact", (req, res) => {
  res.send("From contact page");
});

//port number is like room number where our project is working or running
app.listen(3000, () => {
  console.log("Nodejs Project has started on port 3000");
});
