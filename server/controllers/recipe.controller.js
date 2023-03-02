'use strict';

const scraper = require('../utils/scrape');

exports.scrapeUrl = async (req, res) => {
  const request = req.body;

  const data = await scraper.scrapeUrl(request.url);

  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();

  // await page.goto(request.url, {
  //   waitUntil: 'domcontentloaded',
  // });

  // const data = await page.evaluate(() => {
  //   const recipeBlock = document.querySelector('.article__content');
  //   const ingredientsBlock = document.querySelectorAll(
  //     '.structured-ingredients__list li'
  //   );

  //   const result = {
  //     title: document.querySelector('h1').innerText,
  //     prepTime: recipeBlock.querySelector('.prep-time .meta-text__data')
  //       .innerText,
  //     cookTime: recipeBlock.querySelector('.cook-time .meta-text__data')
  //       .innerText,
  //     totalTime: recipeBlock.querySelector('.total-time .meta-text__data')
  //       .innerText,
  //     servings: recipeBlock.querySelector('.recipe-serving .meta-text__data')
  //       .innerText,
  //   };

  //   const ingredients = Array.from(ingredientsBlock).map((item) => {
  //     console.log(item);
  //   });

  //   return result;
  // });

  res.send(`Got url: '${request.url}'`);
};
