require('dotenv').config();
const express = require('express');
const { OpenAI } = require('openai');

const app = express();
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const port = process.env.PORT || 5000;

app.post('/ask', async (req, res) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
  return res.status(200).json({
    success: true,
    message: completion,
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}!!`));
