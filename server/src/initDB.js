const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI || "";
console.log(`Connecting database to uri ${uri}`);
try {
  mongoose.connect(uri);
} catch (e) {
  console.log(e);
}