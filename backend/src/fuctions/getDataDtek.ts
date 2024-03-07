import puppeteer from 'puppeteer';
import { DataOrel } from '../parsing/parsing.dtekOrel.interface';
import { DataMegan } from '../parsing/parsing.dtekMegan.interface';

export const getDataDtek = async (company: string) => {
  let resOrel: DataOrel = {
    date: undefined,
    indicationDay: undefined,
    indicationNight: undefined,
  };
  let resMegan: DataMegan = {
    date: undefined,
    indicationEnergyActive: undefined,
    indicationEnergyReactiveGeneration: undefined,
    indicationEnergyReactive: undefined,
  };
  let contractualAccount;
  let password;

  switch (company) {
    case 'Orel':
      contractualAccount = process.env.DTEK_CONTRACTUAL_ACCOUNT_OREL;
      password = process.env.DTEK_PASSWORD_OREL;
      break;
    case 'Megan':
      contractualAccount = process.env.DTEK_CONTRACTUAL_ACCOUNT_MEGAN;
      password = process.env.DTEK_PASSWORD_MEGAN;
      break;
  }
  //{ headless: false }
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://okenergy.com.ua/');

  const buttonSelect = await page.$$('.login-Kem__tabs > button');

  await buttonSelect[1].click();

  await page.waitForSelector('.login__form-input');

  await page.type('.entry__form > :nth-child(1) > input', contractualAccount, {
    delay: 100,
  });
  await page.type('.entry__form > :nth-child(2) > input', password, {
    delay: 100,
  });
  await page.click('.entry__form > :nth-child(4)');

  const buttonTextSelector = await page.waitForSelector(
    '.indicators-ent__form > :nth-child(5)',
  );

  const buttonText = await buttonTextSelector?.evaluate((el) => el.textContent);
  if (buttonText === 'Розрахувати') {
    await page.waitForSelector('.indicators-ent__form > :nth-child(5)');
    await page.click('.indicators-ent__form > :nth-child(5)');
  }

  if (company === 'Orel') {
    const dateSelector = await page.waitForSelector('.indicators-table__date');
    const date = await dateSelector?.evaluate((el) => el.textContent);

    resOrel.date = date;

    const orelDaySelector = await page.waitForSelector(
      '.indicators-table__wrap-rc > :nth-child(1) > div > :nth-child(2) > span',
    );
    const orelDay = await orelDaySelector?.evaluate((el) => el.textContent);
    const indicationOrelDay = orelDay.slice(0, 1) + orelDay.slice(2, 8);
    const orelNightSelector = await page.waitForSelector(
      '.indicators-table__wrap-rc > :nth-child(2) > div > :nth-child(2) > span',
    );
    const orelNight = await orelNightSelector?.evaluate((el) => el.textContent);
    const indicationOrelNight = orelNight.slice(0, 1) + orelNight.slice(2, 8);
    resOrel.indicationDay = indicationOrelDay;
    resOrel.indicationNight = indicationOrelNight;

    //await browser.close();
  } else if (company === 'Megan') {
    const dateSelector = await page.waitForSelector(
      '.indicators-table__body > :nth-child(1) > .indicators-table__wrap-rc > :nth-child(1) > :nth-child(1)> :nth-child(1)',
    );
    const date = await dateSelector?.evaluate((el) => el.textContent);

    resMegan.date = date;
    const indicationEnergyActiveSelector = await page.waitForSelector(
      '.indicators-table__body > :nth-child(1) > .indicators-table__wrap-rc > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)',
    );
    const indicationEnergyActive =
      await indicationEnergyActiveSelector?.evaluate((el) => el.textContent);

    resMegan.indicationEnergyActive =
      indicationEnergyActive.slice(0, 1) + indicationEnergyActive.slice(2, 8);

    const indicationEnergyReactiveSelector = await page.waitForSelector(
      '.indicators-table__body > :nth-child(2) > .indicators-table__wrap-rc > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)',
    );
    const indicationEnergyReactive =
      await indicationEnergyReactiveSelector?.evaluate((el) => el.textContent);

    resMegan.indicationEnergyReactive = indicationEnergyReactive.slice(0, 6);

    const indicationEnergyReactiveGenerationSelector =
      await page.waitForSelector(
        '.indicators-table__body > :nth-child(3) > .indicators-table__wrap-rc > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)',
      );
    const indicationEnergyReactiveGeneration =
      await indicationEnergyReactiveGenerationSelector?.evaluate(
        (el) => el.textContent,
      );

    resMegan.indicationEnergyReactiveGeneration =
      indicationEnergyReactiveGeneration.slice(0, 5);

    //await browser.close();

    return resMegan;
  }

  return resOrel;
};
