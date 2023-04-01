import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

app.get('/search-recommend', (req, res) => {
  const limit = req.query.limit;
  SearchModel.find()
    .limit(limit)
    .then((result) => {
      if (!result) {
        res.status(404).json({ message: 'Not found' });
      }
      res.send(result);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

app.get('/search', (req, res) => {
  const query = req.query.q;
  const page = req.query.page;
  const limit = req.query.limit;
  const skip = (page - 1) * limit;
  SearchModel.find({ title: { $regex: `.*${query}.*` } })
    .skip(skip)
    .limit(limit)
    .then((result) => {
      if (!result) {
        res.status(404).json({ message: 'Not found' });
      }
      res.send(result);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

app.post('/data', (req, res) => {
  const record = new SearchModel(req.body);
  record
    .save()
    .then((result) => {
      res.status(201).json({ message: 'Record created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error saving record' });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default router;
