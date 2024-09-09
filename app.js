const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const helmet = require("helmet");
const hpp = require("hpp");
const xss = require("xss-clean");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const dotenv = require("dotenv");

// load environment variables from .env file
dotenv.config();

// initialize express
const app = express();

// set security headers
app.use(helmet());

// prevent parameter pollution
app.use(hpp());

// prevent xss attacks
app.use(xss());

// enable cors
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cookie parser middleware
app.use(cookieParser());

// prevent nosql injection
app.use(mongoSanitize());

// logging middleware
app.use(morgan("dev"));

// rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each ip to 100 requests per windowms
});
app.use(limiter);

// import routes
const router = require("./src/apis");

// api routes
app.use("/api/v1", router);

// root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to Edu Care server" });
});

// handle 404 errors for invalid routes
app.use((req, res, next) => {
  next(createError(404, "route not found"));
});

// global error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "internal server error",
  });
});

module.exports = app;
