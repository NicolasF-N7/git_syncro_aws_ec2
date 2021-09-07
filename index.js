const express = require('express')
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log("Example app listening on port " + port + " !");
  console.log("Access it via http://ec2-35-178-182-255.eu-west-2.compute.amazonaws.com:8000 !");
});
//t
