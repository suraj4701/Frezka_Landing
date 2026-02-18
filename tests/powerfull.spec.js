import { expect, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;
const SETTINGS_PANEL_FEATURE_URL = "https://frezka.iqonic.design/feature/powerful-settings-panel/";

test.describe('Powerful Settings Panel Feature Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover();
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[10]/a[1]").click();
        expect(page.url()).toBe(SETTINGS_PANEL_FEATURE_URL);
    });

    test("Envanto Frezka link verify on Settings Panel page", async ({ page }) => {
        const envantoFrezkaLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-5b56233 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await EnvantoFrezkaVerify(page, envantoFrezkaLinkLocator);
    });

    test("Website link verify on Settings Panel page", async ({ page }) => {
        const adminPanelLinkLocator = page.locator("//a[normalize-space()='View Demo']");
        await WebsiteVerify(page, adminPanelLinkLocator);
    });

    test("Trustpilot link verify on Settings Panel page", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//img[@class='attachment-large size-large wp-image-155']");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto link verify on Settings Panel page", async ({ page }) => {
        const envantoLinkLocator = page.locator("//img[contains(@class,'attachment-large size-large wp-image-856')]");
        await EnvantoVerify(page, envantoLinkLocator);
    });

    test("Book a Quick call link verify on Settings Panel page", async ({ page }) => {
        const bookCallLinkLocator = page.locator("//a[normalize-space()='Book a quick call.']");
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("Various payment methods link verify on Settings Panel page", async ({ page }) => {
        const paymentMethodsLink = page.locator("//a[normalize-space()='various payment methods']");
        await paymentMethodsLink.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/online-and-offline-payment-options/";
        await CommonLinkVerify(page, paymentMethodsLink, expectedLink);
    });

    test("Manage staff commissions link verify on Settings Panel page", async ({ page }) => {
        const staffCommissionsLink = page.locator("//a[normalize-space()='manage staff commissions']");
        await staffCommissionsLink.scrollIntoViewIfNeeded();
        const expectedLink = "https://apps.iqonic.design/frezka/admin/login";
        await CommonLinkVerify(page, staffCommissionsLink, expectedLink);
    });

    test("Set up email notifications link verify on Settings Panel page", async ({ page }) => {
        const emailNotificationsLink = page.locator("//a[normalize-space()='Set up email notifications']");
        await emailNotificationsLink.scrollIntoViewIfNeeded();
        const expectedLink = "https://apps.iqonic.design/frezka/admin/login";
        await CommonLinkVerify(page, emailNotificationsLink, expectedLink);
    });

    test("Push notifications link verify on Settings Panel page", async ({ page }) => {
        const pushNotificationsLink = page.locator("//a[normalize-space()='push notifications']");
        await pushNotificationsLink.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/real-time-notification/";
        await CommonLinkVerify(page, pushNotificationsLink, expectedLink);
    });

    test("Service offerings link verify on Settings Panel page", async ({ page }) => {
        const serviceOfferingsLink = page.locator("//a[normalize-space()='service offerings']");
        await serviceOfferingsLink.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/services-and-packages/";
        await CommonLinkVerify(page, serviceOfferingsLink, expectedLink);
    });
});