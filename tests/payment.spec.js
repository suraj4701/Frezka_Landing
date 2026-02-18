import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CommonLinkVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;
const PAYMENT_FEATURE_URL = "https://frezka.iqonic.design/feature/online-and-offline-payment-options/";

test.describe('Payment Online & Offline Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover();
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[4]/a[1]").click();
        expect(page.url()).toBe(PAYMENT_FEATURE_URL);
    });

    test("Envanto Frezka link verify on Payment page", async ({ page }) => {
        const envantoFrezkaLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-5b56233 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await EnvantoFrezkaVerify(page, envantoFrezkaLinkLocator);
    });

    test("Website link verify on Payment page", async ({ page }) => {
        const adminPanelLinkLocator = page.locator("//a[normalize-space()='View Demo']");
        await WebsiteVerify(page, adminPanelLinkLocator);
    });

    test("Trustpilot link verify on Payment page", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//img[contains(@class,'attachment-large size-large wp-image-155')]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto link verify on Payment page", async ({ page }) => {
        const envantoLinkLocator = page.locator("//img[@class='attachment-large size-large wp-image-856']");
        await EnvantoVerify(page, envantoLinkLocator);
    });

    test("Book a Quick call link verify on Payment page", async ({ page }) => {
        const bookCallLinkLocator = page.locator("//a[normalize-space()='Book a quick call.']");
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("Clients link verify on Payment page", async ({ page }) => {
        const clientsLinkLocator = page.locator("//a[normalize-space()='clients']");
        await clientsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/client-management-system/";
        await CommonLinkVerify(page, clientsLinkLocator, expectedLink);
    });

    test("Financial Management link verify on Payment page", async ({ page }) => {
        const adminpanelLinkLocator = page.locator("//a[normalize-space()='financial management']");
        await AdminPanelVerify(page, adminpanelLinkLocator);
    });
});