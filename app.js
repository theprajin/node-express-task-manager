require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const taskRouter = require("./routes/taskRouter");

const notFound = require("./middleware/not-found");

//middleware
app.use(express.json());

//routes
app.use("/api/v1/tasks", taskRouter);

app.use(notFound);

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Successfully connected to database");
    app.listen(port, console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
