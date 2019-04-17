'use strict';

//controller for our scraper
let db = require('../models');
let scrape = require('../scripts/scrape');

module.exports = {
    scrapeHeadlines: (req, res) => {
        return scrape()
            .then(articles => db.Headline.create(articles))
            .then(dbHeadline => {
                if (dbHeadline.length === 0) {
                    res.json({
                        message: 'No new articles today. Check back tomorrow!'
                    });
                } else {
                    res.json({
                        message: `Added ${dbHeadline.length} new articles!`
                    });
                }
            })
            .catch(err => {
                res.json({
                    message: 'Scrape complete!'
                });
            });
    }
};