const app = require("./index");
const connect = require("./configs/db");

require("dotenv").config();

const port = process.env.PORT || 1234;

app.listen(port, async () => {
  await connect();
  console.log("Hai dear friend i am listening 1234");
});
