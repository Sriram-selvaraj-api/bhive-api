import express from 'express';
import cors from 'cors';
import mockJson from './mock-json.js';


const app = express();
const port = 3000;
app.use(cors());


app.get('/workspace', (req, res) => {
  res.json(mockJson);
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
