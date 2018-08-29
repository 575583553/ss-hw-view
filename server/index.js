let express = require('express');
let path = require('path');
let app = express();

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/:id', (req, res) => {
  // let path = `./json/${req.params.id}.json`;
  let localPath = path.join(__dirname, `${req.params.id}.json`);
  res.sendFile(localPath, (err) => {
    if (err) {
      res.send(err);
    }
  });

  // res.sendfile(path, err => {
  //     if(err) {
  //         res.send(err);
  //     }
  // })
});

app.listen(8088);
