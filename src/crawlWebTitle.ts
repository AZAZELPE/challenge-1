import * as puppeteer from 'puppeteer';

export const crawlWebTitle = async ({ url }: { url: string }) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);
  const title = await page.title();
  await browser.close();

  return title;
};
