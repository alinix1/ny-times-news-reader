// visual testing implemented where needed

const { test, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

const aboutPage = "http://localhost:3000/about";

test("there is a title in the about page", async ({ page }) => {
  await page.goto(aboutPage);
  await expect(page.locator("[qa-id='about-title']")).toHaveText("About");
});

test("there is a secondary title", async ({ page }) => {
  await page.goto(aboutPage);
  await expect(page.locator("[qa-id='heading-secondary']")).toHaveText(
    "This is not a fake news source"
  );
});

test("there is a paragraph", async ({ page }) => {
  await page.goto(aboutPage);

  const paragraphElement = await page.locator("[qa-id='about-paragraph']");

  const paragraphText = await paragraphElement.textContent();

  await expect(paragraphText).not.toBeNull();
});

test("there are 3 images with individual qa-ids", async ({ page }) => {
  await page.goto(aboutPage);

  const image1 = await page.locator("[qa-id='reading-newspaper']");
  const image2 = await page.locator("[qa-id='typewriter']");
  const image3 = await page.locator("[qa-id='new york times headquarter']");

  expect(await image1.count()).toBe(1);
  expect(await image2.count()).toBe(1);
  expect(await image3.count()).toBe(1);
});
