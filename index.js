const config = require("./config");
const { init } = require("./core");

const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const router = require("./router");

const app = express();

// HTTPS Redirect
app.use((req, res, next) => {
  if (process.env.NODE_ENV == "production")
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
  next();
});

app.set("trust proxy", true);

// Middlewares
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.all("/{*any}", (req, res) => {
  res.send(req.headers.host);
});

(async () => {
  await init();

  app.listen(config.port, () => {
    console.log(`Server Started @ ${config.port}`);
  });
})();
