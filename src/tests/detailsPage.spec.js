const { test, expect, chromium, firefox } = require("@playwright/test");

const URL = "http://localhost:3000";

test("the user should be able to click on an article card and navigate to the details page", async ({
  page,
}) => {
  const browser = (await chromium.launch()) || (await firefox.launch);
  await page.goto(URL);

  await page.waitForSelector("[qa-id='article-container']:first-child");

  await expect(
    page.locator("[qa-id='article-container']:first-child")
  ).toBeVisible();

  const articleImage = await page.locator("[qa-id='article-image']").first();
  await articleImage.click();

  await browser.newPage();
});

test("there should be a large image, title, byline, abstract, date, and link", async ({
  page,
}) => {
  await page.goto(URL);

  await page.waitForSelector("[qa-id='article-container']:first-child", {});

  const articleImage = await page.locator("[qa-id='article-image']").first();
  await articleImage.click();

  await page.waitForSelector("[qa-id='detail-article-img']", {});

  await expect(page.locator("[qa-id='detail-article-title']")).toBeVisible(
    "Title element is not visible"
  );
  await expect(page.locator("[qa-id='detail-article-byline']")).toBeVisible(
    "Byline element is not visible"
  );
  await expect(page.locator("[qa-id='detail-article-abstract']")).toBeVisible(
    "Abstract element is not visible"
  );
  await expect(page.locator("[qa-id='detail-article-date']")).toBeVisible(
    "Date element is not visible"
  );
});

test("the user should be able to click on the link and be taken to a new page", async ({
  page,
}) => {
  await page.goto(URL);

  await page.waitForSelector("[qa-id='article-container']:first-child");

  await expect(
    page.locator("[qa-id='article-container']:first-child")
  ).toBeVisible();

  const articleImage = await page.locator("[qa-id='article-image']").first();
  await articleImage.click();

  const linkDetails = await page.locator("[qa-id='link-details']");
  await linkDetails.click();
});
