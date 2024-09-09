const http = require("http");
const app = require("./app");
const connectToDB = require("./src/config/db");
const { serverPort } = require("./src/utils/secret");
const server = http.createServer(app);

const PORT = serverPort;

const main = async () => {
  await connectToDB();
  server.listen(PORT, () => {
    console.log(`Edu Care Server is running on http://localhost:${PORT}`);
  });
};

main();
