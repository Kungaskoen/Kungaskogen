const express = require(express);
const app = express();

const port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



app.get('/', () => {
  render()
});

app.listen(port, () => {
  console.log(`Now listening on ${port}`);
});
