const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const path = require('path');

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
})

app.get('/*', function (req, res) {

res.sendFile(
path.join(__dirname, 'https://dianaefimova.github.io/homepage/about'),

function (err) {
if (err) {
 res.status(500).send(err);
}
 }
);

});

