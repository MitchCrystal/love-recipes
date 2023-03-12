'use strict';

import puppeteer from 'puppeteer';

exports.scrapeUrl = async (url:string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: 'domcontentloaded',
  });

  const data = await page.evaluate(() => {
    const recipeBlock = document.querySelector('.article__content');

    const cleanInput = (str:string) => {
      const regexCleaner = /\n/g;
      return str.replace(regexCleaner, '').trim();
    };

    const result = {
      title: document?.querySelector('h1')?.textContent,
      description:  document?.querySelector('meta[name="description"]')?.attributes[1].value ,
      image: document?.querySelector('meta[property="og:image"]')?.attributes[1].value,
      prepTime: recipeBlock?.querySelector('.prep-time .meta-text__data')?.textContent,
      cookTime: recipeBlock?.querySelector('.cook-time .meta-text__data')?.textContent,
      totalTime: recipeBlock?.querySelector('.total-time .meta-text__data')?.textContent,
      servings: recipeBlock?.querySelector('.recipe-serving .meta-text__data')?.textContent,
      ingredients: [""],
      instructions: [{ title: "", instructions: [""] }]
    };

    // Ingredients
    const ingredientsBlock = document.querySelectorAll(
      '.structured-ingredients__list li'
    );
    result.ingredients = Array.from(ingredientsBlock).map((item) => {
      const ingredientText = (item.textContent !== null)? item.textContent : "";
      return cleanInput(ingredientText);
    });

    // Instructions
    const instructionsBlock = document.querySelectorAll(
      '.structured-project__steps li'
    );
    result.instructions = Array.from(instructionsBlock).map((item) => {
      const title = item.querySelector('.mntl-sc-block-subheading__text');
      if(title !== null) title.remove();
      
      const instructions = item.querySelectorAll(':scope > p');
      const instructionsArray = Array.from(instructions).map((instruction) => {
        const textInstruction = (instruction.textContent !== null)? instruction.textContent : "";
        return cleanInput(textInstruction);
      });

      const titleContent = (title && title.textContent)? title?.textContent : "";
      return {
        title: cleanInput(titleContent),
        instructions: instructionsArray,
      };
    });

    return result;
  });

  return data;
};
