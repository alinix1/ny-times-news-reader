// will refactor if needed later
// test for click events to detail page
// create fixture files to test on

const { test, expect } = require("@playwright/test");

const URL = "http://localhost:3000";

test("there is a title in the header", async ({ page }) => {
  await page.goto(URL);
  await expect(page.locator("[qa-id='header-title']")).toHaveText(
    "NY Times News"
  );
});

test("there is a logo in the header", async ({ page }) => {
  await page.goto(URL);
  await expect(page.locator("[qa-id='nyt-logo']")).toBeVisible();
});

test("there is a video in the header", async ({ page }) => {
  await page.goto(URL);
  await expect(page.locator("[qa-id='background-video']")).toBeVisible();
});

test("there is a navigation bar with tabs for sections", async ({ page }) => {
  await page.goto(URL);
  await expect(page.locator("[qa-id='nav-bar']")).toBeVisible();
});

test("there should be a total of 8 tabs in the navigation bar", async ({
  page,
}) => {
  await page.goto(URL);

  const items = await page.locator("[qa-id='nav-item']").count();

  const expectedItemCount = 8;

  expect(items).toBe(expectedItemCount);
});

test("there are icons in the navigation bar", async ({ page }) => {
  await page.goto(URL);
  await expect(page.locator("[qa-id='nav-item-home-icon']")).toBeVisible();
  await expect(page.locator("[qa-id='nav-item-us-icon']")).toBeVisible();
  await expect(page.locator("[qa-id='nav-item-world-icon']")).toBeVisible();
  await expect(
    page.locator("[qa-id='nav-item-technology-icon']")
  ).toBeVisible();
  await expect(page.locator("[qa-id='nav-item-arts-icon']")).toBeVisible();
  await expect(page.locator("[qa-id='nav-item-food-icon']")).toBeVisible();
  await expect(page.locator("[qa-id='nav-item-health-icon']")).toBeVisible();
  await expect(page.locator("[qa-id='nav-item-about-icon']")).toBeVisible();
});

test("there are titles for the sections", async ({ page }) => {
  await page.goto(URL);
  await expect(page.locator("[qa-id='home-tab-title']")).toHaveText("Home");
  await expect(page.locator("[qa-id='us-tab-title']")).toHaveText("US News");
  await expect(page.locator("[qa-id='world-tab-title']")).toHaveText(
    "World News"
  );
  await expect(page.locator("[qa-id='technology-tab-title']")).toHaveText(
    "Technology News"
  );
  await expect(page.locator("[qa-id='arts-tab-title']")).toHaveText(
    "Arts News"
  );
  await expect(page.locator("[qa-id='food-tab-title']")).toHaveText(
    "Food News"
  );
  await expect(page.locator("[qa-id='health-tab-title']")).toHaveText(
    "Health News"
  );
  await expect(page.locator("[qa-id='about-tab-title']")).toHaveText("About");
});

test("there are articles on the page", async ({ page }) => {
  await page.goto(URL);
  await expect(page.locator("[qa-id='article-list']")).toBeVisible();
});

test("there is an image, title, and byline on the article card", async ({
  page,
}) => {
  await page.goto(URL);

  const firstArticle = await page.locator(
    "[qa-id='article-container']:first-child"
  );

  await expect(firstArticle).toBeVisible();

  const imageElement = await firstArticle.locator("[qa-id='article-image']");
  const titleElement = await firstArticle.locator("[qa-id='article-title']");
  const bylineElement = await firstArticle.locator("[qa-id='article-byline']");

  await expect(imageElement).toBeVisible();

  await expect(titleElement).toHaveText(
    "Under Shroud of Secrecy, Israel Invasion of Gaza Has Begun"
  );
  await expect(bylineElement).toHaveText(
    "By Patrick Kingsley and Ronen Bergman"
  );
});

test("the user should be able to click on a tab section and navigate to the about page", async ({
  page,
}) => {
  await page.goto(URL);

  const aboutTab = await page.locator("[qa-id='about-tab-title']");

  await expect(aboutTab).toBeVisible();

  await aboutTab.click();

  await expect(page).toHaveURL("http://localhost:3000/about");
});
