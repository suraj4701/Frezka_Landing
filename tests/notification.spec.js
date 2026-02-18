import { expect, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;
const NOTIFICATION_FEATURE_URL = "https://frezka.iqonic.design/feature/real-time-notification/";

test.describe('Real-Time Notification Feature Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover();
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[7]/a[1]").click();
        expect(page.url()).toBe(NOTIFICATION_FEATURE_URL);
    });

    test("Envanto Frezka link verify on Notification page", async ({ page }) => {
        const envantoFrezkaLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-5b56233 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await EnvantoFrezkaVerify(page, envantoFrezkaLinkLocator);
    });

    test("Website link verify on Notification page", async ({ page }) => {
        const adminPanelLinkLocator = page.locator("//a[normalize-space()='View Demo']");
        await WebsiteVerify(page, adminPanelLinkLocator);
    });

    test("Trustpilot link verify on Notification page", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//img[contains(@class,'attachment-large size-large wp-image-155')]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto link verify on Notification page", async ({ page }) => {
        const envantoLinkLocator = page.locator("//img[@class='attachment-large size-large wp-image-856']");
        await EnvantoVerify(page, envantoLinkLocator);
    });

    test("Book a Quick call link verify on Notification page", async ({ page }) => {
        const bookCallLinkLocator = page.locator("//a[normalize-space()='Book a quick call.']");
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("Mobile App link verify on Notification page", async ({ page }) => {
        const mobileAppLinkLocator = page.locator("//a[normalize-space()='mobile app']");
        await mobileAppLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/product/salon-and-spa-flutter-app/";
        await CommonLinkVerify(page, mobileAppLinkLocator, expectedLink);
    });
});