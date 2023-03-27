import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const connectUrl = process.env.CONNECT_URL;
await mongoose.connect(connectUrl);
const router = express.Router();

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

const SearchModel = mongoose.model('search', {
  title: String,
});

app.get('/search', async (req, res) => {
  const query = req.query.q;
  const page = req.query.page;
  const limit = 5;
  const skip = (page - 1) * limit;
  const result = await SearchModel.find({ title: { $regex: `.*${query}.*` } })
    .skip(skip)
    .limit(limit);
  res.send(result);
});

// app.post('/data', (req, res) => {
//   const record = new Search(req.body);
//   record
//     .save()
//     .then((result) => {
//       res.status(201).json({ message: 'Record created successfully' });
//     })
//     .catch((error) => {
//       res.status(500).json({ message: 'Error saving record' });
//     });
// });

// datas.goods.forEach((data) => {
//   axios
//     .post('http://localhost:3000/data', data)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }); // 데이터 번들로 넣기

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default router;
