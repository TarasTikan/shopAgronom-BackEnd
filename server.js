const app = require("./app");
const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://Taras:nd1LNGczRYqdbMZq@cluster0.hqxfyrr.mongodb.net/shopProducts";

  
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
