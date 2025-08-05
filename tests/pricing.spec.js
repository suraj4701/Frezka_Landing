import { expect, test } from '@playwright/test';
import { BuyServiceVerify, EnvantoFrezkaVerify } from './common';
const home_url = process.env.HOME_URL;
const PRICING_URL = "https://frezka.iqonic.design/pricing/";

test.describe('Pricing Page Link Verifications', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-1792']").click();
        expect(page.url()).toBe(PRICING_URL);
    });

    test("Buy now link on Pricing page", async ({ page }) => {
        const buyNowLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
        await buyNowLinkLocator.scrollIntoViewIfNeeded();
        await EnvantoFrezkaVerify(page, buyNowLinkLocator);
    });

    test("Buy Service link on Pricing page", async ({ page }) => {
        const buyServiceLinkLocator = page.locator("//a[contains(text(),'Buy Service')]");
        await buyServiceLinkLocator.scrollIntoViewIfNeeded();
        await BuyServiceVerify(page, buyServiceLinkLocator);
    });
});