const express = require("express");
const router = express.Router();

// Import all routers
const routers = [require("./routers/CollegeRouter")];

// Dynamically apply routers
routers.forEach((route) => router.use(route));

module.exports = router;
