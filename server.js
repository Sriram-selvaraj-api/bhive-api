import express from 'express';
import mockData from './mock-json.js';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;
const mockDataValue = mockData

app.use(cors());

app.get('/api/spaces', (req, res) => {
  res.json(mockDataValue);
});

app.get('/', (req, res) => {
  res.send('BHIVE Workspace Public API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
