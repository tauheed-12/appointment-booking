const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const { getDoctor } = require('./controllers/doctors');
const { sendMail } = require('./controllers/user');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.get('/api/doctors/:id', getDoctor);
app.post('/send-email', sendMail);

app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});
