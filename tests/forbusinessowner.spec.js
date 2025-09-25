import { expect, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;
const For_Business_Owners_URL = "https://frezka.iqonic.design/spa-and-salon-software-for-business-owners/";

test.describe('For Business Owners Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]").hover();
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/ul[1]/li[2]/a[1]").click();
        expect(page.url()).toBe(For_Business_Owners_URL);
    });

    test("Trustpilot link verify", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//a[@href='https://www.trustpilot.com/review/iqonic.design']");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Book a Quick call link verify", async ({ page }) => {
        const bookcallLinkLocator = page.locator("//a[normalize-space()='Book a quick call.']");
        await BookcallVerify(page, bookcallLinkLocator);
    });

    test("Support Team link verify", async ({ page }) => {
        const featuresLinkLocator = page.locator("//a[normalize-space()='support team']");
        await featuresLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://iqonic.desky.support/";
        await CommonLinkVerify(page, featuresLinkLocator, expectedLink);
    });

    test("Features link verify", async ({ page }) => {
        const featuresLinkLocator = page.locator("//a[normalize-space()='features']");
        await featuresLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/services-and-packages/";
        await CommonLinkVerify(page, featuresLinkLocator, expectedLink);
    });

    test("Custom Development Work link verify", async ({ page }) => {
        const customDevLinkLocator = page.locator("//a[normalize-space()='custom development work']");
        await customDevLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://service.iqonic.design/";
        await CommonLinkVerify(page, customDevLinkLocator, expectedLink);
    });
});