const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const schema = require("./schema/schema");
const colors = require("colors");

const app = express();

// Connect to database
connectDB();

// CORS Middleware
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow));
