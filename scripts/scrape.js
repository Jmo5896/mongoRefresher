'use strict';
// scraper script
let axios = require('axios');
let cheerio = require('cheerio');

//this will scrape NYTimes website
let scrape = () => {
  return axios.get('http://www.nytimes.com').then(res => {
    let $ = cheerio.load(res.data);
    console.log('scraping');

    //storage array
    let articles = [];

    //elemet loop
    $('div.css-1100km').each((i, element) => {
      let head = $(this)
        .find('h2')
        .text()
        .trim();

      let url = $(this)
        .find('a')
        .attr('href');

      let sum = $(this)
        .find('p')
        .text()
        .trim();

      //check to make sure these are all true
      if (head && url && sum) {
        // This section uses regular expressions and the trim function to tidy our headlines and summaries
        // We're removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
        let headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, ' ').trim();
        let sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, ' ').trim();

        //create our article obj and push it to our storage array
        let dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: 'https://www.nytimes.com' + url
        };

        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

module.exports = scrape;