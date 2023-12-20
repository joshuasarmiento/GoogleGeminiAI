const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config()

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const fs = require("fs");

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = `sample prompt here..`
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
  
    fs.writeFileSync('res.txt', text, (err) => {
      if (err) throw err;
      console.log('File has been created!');
    });

  }
  
  run();