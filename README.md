# CHAT APP

This is the non-stream version of OpenAI's API.

## Tech Stack

1. Node.js
2. React.js
3. Express.js
4. OpenAI API

## How to set up

In order to get this running, first you'll have to clone this repository to your local machine.

Then you'll need to create a *.env* file with your API key. It needs to be in the following format for the code to work:

API_KEY=<Your_API_KEY>

There's no need to put the key in quotation marks

Once, you have cloned the repo and created the .env file, run the following commands:
1. npm install
2. npm run start:frontend
3. npm run start:backend

Navigate to http://localhost:3000

I did not come up with the css stuff. I followed the video located here:
https://www.youtube.com/watch?v=JJ9fkYX7q4A

I updated several parts of the code so that it is up-to-date with the OpenAI Api documentation. In the video, she uses the legacy version of the API. I've written this code to use the new chat.completions.create(). The instructor in the video uses the old completions API.

Additionally, I broke the code up for the React app into Components so that it is easier to follow. I used prop drilling to pass around the state between the different components.