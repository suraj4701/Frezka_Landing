import { test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoFrezkaVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe('More Section Links Verification', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
    });

    test("Hire Us link verify", async ({ page }) => {
        const hireUsLinkLocator = page.locator("//li[@id='menu-item-842']//a[@class='ct-menu-link']");
        const expectedLink = "https://iqonic.tech/";
        await CommonLinkVerify(page, hireUsLinkLocator, expectedLink);
    });

    test("Book Demo Call link verify", async ({ page }) => {
        const bookCallLinkLocator = await page.locator("//li[@id='menu-item-4746']//a[@class='ct-menu-link']")
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("Buy Now", async ({ page }) => {
        const bookDemoCallLinkLocator = page.locator("//div[@data-items='primary']//a[@aria-label='Buy Now'][normalize-space()='Buy Now']");
        await EnvantoFrezkaVerify(page, bookDemoCallLinkLocator);
    });
});