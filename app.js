const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || "v1";

app.get("/", (req, res) => {
  res.send(`
    <h1>Blue Green Deployment Demo</h1>
    <h2>App Version: ${APP_VERSION}</h2>
    <p>Container is running successfully.</p>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});