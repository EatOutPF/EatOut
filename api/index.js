const server = require("./src/server.js");
const port = process.env.port || 5001;

server.listen(port, () => {
  console.log(`%s listening at ${port}`); // eslint-disable-line no-console
});
