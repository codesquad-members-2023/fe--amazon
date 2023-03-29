import * as express from 'express';
const app = express();

app.listen(8080, () => {
  console.log('listening on 8080');
});

app.get('/', (req, res) => {
  res.send('반갑습니다.');
});
