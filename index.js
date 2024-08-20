import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import User from "./models/user.model.js";

const port = process.env.PORT;
const server = express();
connectDB();

// Create the user prototype
// const newUser = new User({
//   fullName: "Akinola Gabriel",
//   email: "gabriel@gmail.com",
//   password: "thisCountryNoEasy",
// });

// // The .save saves the newUSer to the db
// newUser
//   .save()
//   .then((user) => {
//     console.log("user saved successfully", user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Second method: Using model.create
// User.create({
//   fullName: "Bukayo Saka",
//   email: "saka@gmail.com",
//   password: "naYouSabi",
// })
//   .then((createdUser) => {
//     console.log("user created", createdUser);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

User.find({})
  .sort({ createdAt: -1 })
  .limit(2)
  .select(["-password", "-fullName"])
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });

// User.findById("66c31395b1dd84ef036e7736")
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
