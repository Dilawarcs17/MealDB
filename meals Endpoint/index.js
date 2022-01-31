var express_data = require("express");
var app = express_data();
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/meals", (req, res, next) => {
    res.json(["Dilawar khan", "Usama Ali", "Arslan", "Hamza"]);
});