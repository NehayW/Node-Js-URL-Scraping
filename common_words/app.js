const express = require('express');
const app = express();
const port = 3000

const axios = require("axios");
const cheerio = require("cheerio");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/get-word", async(req,res)=>{
    const url = req.body.url
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        var text = $.text()
        // code for get count of words
        var wordCounts = { };
        text = text.toLowerCase()
        var words = text.split(" ");
        for(var i = 0; i < words.length; i++)
        {
          if(words[i].length > 2 && !words[i].includes("."))
          {
            wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
          }
        }
        // code for get object sort
        var items = Object.keys(wordCounts).map(function(key) {
        return [key, wordCounts[key]];
        });
        items.sort(function(first, second) {
        return second[1] - first[1];
        });
        const response_list = items.slice(0, 100);
        res.status(200).send(response_list)
      } catch (err) {
        console.error(err);
        res.status(500).send({"error": "Provided URL is invalid"})
      }
})

app.listen(port, (err) => {
  console.log('Server is up and listening on', port);
});