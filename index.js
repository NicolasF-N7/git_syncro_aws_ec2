const express = require('express')
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello World test+2! <br><h1>WELCOME</h1>')
});

app.listen(port, () => {
  console.log("Example app listening on port " + port + " !");
  console.log("Access it via http://ec2-35-178-182-255.eu-west-2.compute.amazonaws.com");
});
//teste
