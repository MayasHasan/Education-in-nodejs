const mongoose = require("mongoose");

// module.exports = function(){
//     mongoose.connect('mongodb://127.0.0.1:27017/educationNodeCrud')
//     .then(() => console.log('Connected to MongooDB ...'))
//     .catch(err=>console.error('Could not connect to MongooDB...',err));
// }

const connectDb = async () => {
  try {
    mongoose.connect(process.env.DB_CS);
    console.log("Connected to MongooDB ...");
  } catch (err) {
    console.error("Could not connect to MongooDB...", err);
    process.exit(1);
  }
};
module.exports = connectDb;
