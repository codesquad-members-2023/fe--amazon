import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoDb from 'mongodb';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const MongoClient = mongoDb.MongoClient;
const connection = MongoClient.connect(
  `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_NAME}.jy2zpck.mongodb.net/?retryWrites=true&w=majority`,
);

let db;
connection
  .then((client) => {
    db = client.db('amazon');
    app.listen(process.env.PORT, () => {
      console.log('listening on 1116');
    });
    app.get('/search', (req, res) => {
      res.json('테스트 문자열');
    });
  })
  .catch((err) => {
    console.log(`에러 발생: ${err}`);
  });

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/server-index.html');
// });
//
// app.get('/test', (req, res) => {
//   res.send('이렇게 하면 dom구조 어뜨케 되지');
// });
