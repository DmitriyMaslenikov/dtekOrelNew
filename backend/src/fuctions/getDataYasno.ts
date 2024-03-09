import puppeteer from 'puppeteer';
import { DataOrelYasno } from '../parsing/parsing.yasnoOrel.interface';

export const getDataYasno = async (company) => {
  let res: DataOrelYasno = {
    date: undefined,
    checkAmount: undefined,
  };
  let uniqueCode;
  let contractualAccount;
  let password;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  switch (company) {
    case 'Orel':
      uniqueCode = process.env.YASNO_UNIQUE_CODE_OREL;
      contractualAccount = process.env.YASNO_CONTRACTUAL_ACCOUNT_OREL;
      password = process.env.YASNO_PASSWORD_OREL;
      break;
    case 'Megan':
      uniqueCode = process.env.YASNO_UNIQUE_CODE_MEGAN;
      contractualAccount = process.env.YASNO_CONTRACTUAL_ACCOUNT_MEGAN;
      password = process.env.YASNO_PASSWORD_MEGAN;
      break;
  }
  //{ headless: false }
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.my.yasno.com.ua/');
  page.on('popup', (domcontentloaded) => {
    console.log('load', domcontentloaded);
  });

  await Promise.all([
    page.waitForSelector('.login__tabs > :nth-child(2)'),
    page.click('.login__tabs > :nth-child(2)'),
  ]);

  await page.waitForSelector('.entry__form');

  await page.type('.entry__form > :nth-child(1) > input', uniqueCode, {
    delay: 100,
  });
  await page.type('.entry__form > :nth-child(2) > input', contractualAccount, {
    delay: 100,
  });
  await page.type('.entry__form > :nth-child(3) > input', password, {
    delay: 100,
  });
  await page.click('.entry__form > :nth-child(5)');

  if (company === 'Megan') {
    await page.waitForSelector('.choise-apart__list > :nth-child(2)');
    await page.click('.choise-apart__list > :nth-child(2)');
  }
  //await sleep(10000);
  // const s = await page.waitForSelector(
  //   '.cabinet__wrap > :nth-child(3) > :nth-child(1) > :nth-child(3)  > :nth-child(2)',
  // );
  // const d = await s?.evaluate((el) => el.textContent);
  // console.log('D', await s?.evaluate((el) => el.textContent));
  await page.waitForSelector(
    '.cabinet__wrap > :nth-child(3) > :nth-child(1) > :nth-child(3) '
  );

  const buttonExistence = await page.$(
    '.cabinet__wrap > :nth-child(3) > :nth-child(1) > :nth-child(3)  > :nth-child(2)'
  );
  //console.log('A', buttonExistence);
  if (buttonExistence !== null) {
    await page.click(
      '.cabinet__wrap > :nth-child(3) > :nth-child(1) > :nth-child(3)  > :nth-child(2)'
    );
    await sleep(30000);
    console.log('A', buttonExistence);
  }

  await page.waitForSelector('.sidebar__nav > :nth-child(2)');
  await page.click('.sidebar__nav > :nth-child(2)');

  await page.waitForSelector(
    '.sidebar__nav > :nth-child(2) > .sidebar__nav-sub > :nth-child(1)'
  );
  await page.click(
    '.sidebar__nav > :nth-child(2) > .sidebar__nav-sub > :nth-child(1)'
  );

  await page.waitForSelector('#top0 > :nth-child(6)');
  await page.click('#top0 > :nth-child(6)');

  const monthSelector = await page.waitForSelector(
    '.basic-table__body > :nth-child(2) > :nth-child(1)'
  );
  const month = await monthSelector?.evaluate((el) => el.textContent);
  res.date = month;

  const dataSelector = await page.waitForSelector(
    '.basic-table__body > :nth-child(2) > :nth-child(4)'
  );
  const data = await dataSelector?.evaluate((el) => el.textContent);
  res.checkAmount = data.slice(0, 2) + data.slice(3, 10);

  await page.setRequestInterception(true);
  page.on('request', (interceptedRequest) => {
    if (interceptedRequest.isInterceptResolutionHandled()) return;
    interceptedRequest.continue();
  });
  page.on('requestfinished', (interceptedRequestFinished) => {
    if (interceptedRequestFinished.url().endsWith('services/ocsp/')) {
      //setTimeout(() => browser.close(), 10000);
    }
  });

  await page.waitForSelector('.bottom-nav > :nth-child(3) > button');
  await page.click('.bottom-nav > :nth-child(3) > button');

  return res;
};
