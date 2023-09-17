const {OpenAI} = require('openai');
require('dotenv').config();
const API_KEY = {
    'apiKey': process.env.API_KEY
}
const openai = new OpenAI(API_KEY);

const PORT = 8000;
const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());


app.post("/completions", async (req, res) => {

    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: req.body.message
                }
            ],
            model: "gpt-3.5-turbo",
            stream: true
        });
        res.send(completion.choices[0].message);
    } catch (e) {
        console.log(e)
    }

})

app.listen(PORT, () => console.log(`Your server is running on ${PORT}`))