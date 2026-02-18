import { test } from '@playwright/test';
import { CommonLinkVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe('Get Help Menu Links Verification', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[5]/a[1]").hover();
    });

    test("Documentation link verify", async ({ page }) => {
        const documentationLinkLocator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[5]/ul[1]/li[1]/a[1]");
        const expectedLink = "https://documentation.iqonic.design/frezka/";
        await CommonLinkVerify(page, documentationLinkLocator, expectedLink);
    });

    test("Support link verify", async ({ page }) => {
        const supportLinkLocator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[5]/ul[1]/li[2]/a[1]");
        const expectedLink = "https://iqonic.desky.support/";
        await CommonLinkVerify(page, supportLinkLocator, expectedLink);
    });

    test("Blog link verify", async ({ page }) => {
        const blogLinkLocator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[5]/ul[1]/li[3]/a[1]");
        const expectedLink = "https://iqonic.design/blog-category/frezka/";
        await CommonLinkVerify(page, blogLinkLocator, expectedLink);
    });
});