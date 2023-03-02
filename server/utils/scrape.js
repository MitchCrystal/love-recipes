'use strict';

const puppeteer = require('puppeteer');

exports.scrapeUrl = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: 'domcontentloaded',
  });

  const data = await page.evaluate(() => {
    const recipeBlock = document.querySelector('.article__content');

    const cleanInput = (str) => {
      const regexCleaner = /\n/g;
      return str.replace(regexCleaner, '').trim();
    };

    const result = {
      title: document.querySelector('h1').innerText,
      description: document.querySelector('meta[name="description"]').content,
      image: document.querySelector('meta[property="og:image"]').content,
      prepTime: recipeBlock.querySelector('.prep-time .meta-text__data')
        .innerText,
      cookTime: recipeBlock.querySelector('.cook-time .meta-text__data')
        .innerText,
      totalTime: recipeBlock.querySelector('.total-time .meta-text__data')
        .innerText,
      servings: recipeBlock.querySelector('.recipe-serving .meta-text__data')
        .innerText,
    };

    // Ingredients
    const ingredientsBlock = document.querySelectorAll(
      '.structured-ingredients__list li'
    );
    result.ingredients = Array.from(ingredientsBlock).map((item) => {
      return cleanInput(item.textContent);
    });

    // Instructions
    const instructionsBlock = document.querySelectorAll(
      '.structured-project__steps li'
    );
    result.instructions = Array.from(instructionsBlock).map((item) => {
      const title = item.querySelector('.mntl-sc-block-subheading__text');
      title.remove();
      // item.remove(title.innerText);
      const instructions = item.querySelectorAll(':scope > p');
      const instructionsArray = Array.from(instructions).map((instruction) =>
        cleanInput(instruction.textContent)
      );

      return {
        title: cleanInput(title.innerText),
        instructions: instructionsArray,
      };
    });

    return result;
  });

  return data;
};
