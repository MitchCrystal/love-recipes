'use strict';

const scraper = require('../utils/scrape');

exports.scrapeUrl = async (req, res) => {
  try {
    const { url } = req.body;
    const data = await scraper.scrapeUrl(url);

    res.status(200);
    res.send(data);
  } catch (error) {
    console.log(`scrapeUrl error:\n${error}`);
    res.status(400);
  }
};
