import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CommonLinkVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;
const SETTINGS_PANEL_FEATURE_URL = "https://frezka.iqonic.design/feature/powerful-settings-panel/";

test.describe('Powerful Settings Panel Feature Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover();
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[10]/a[1]").click();
         expect(page.url()).toBe(SETTINGS_PANEL_FEATURE_URL);
    });

    test("Trustpilot link verify on Settings Panel page", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto Frezka link verify on Settings Panel page", async ({ page }) => {
        const envantoFrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoFrezkaVerify(page, envantoFrezkaLinkLocator);
    });

    test("Admin Panel link verify on Settings Panel page", async ({ page }) => {
        const adminPanelLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await AdminPanelVerify(page, adminPanelLinkLocator);
    });

    test("Envanto link verify on Settings Panel page", async ({ page }) => {
        const envantoLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]/img[1]");
        await EnvantoVerify(page, envantoLinkLocator);
    });

    test("Book a Quick call link verify on Settings Panel page", async ({ page }) => {
        const bookCallLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("Various payment methods link verify on Settings Panel page", async ({ page }) => {
        const paymentMethodsLink = page.locator("//a[contains(text(),'various payment methods')]");
        await paymentMethodsLink.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/online-and-offline-payment-options/";
        await CommonLinkVerify(page, paymentMethodsLink, expectedLink);
    });

    test("Manage staff commissions link verify on Settings Panel page", async ({ page }) => {
        const staffCommissionsLink = page.locator("//a[contains(text(),'manage staff commissions')]");
        await staffCommissionsLink.scrollIntoViewIfNeeded();
        const expectedLink = "https://apps.iqonic.design/frezka/login";
        await CommonLinkVerify(page, staffCommissionsLink, expectedLink);
    });

    test("Set up email notifications link verify on Settings Panel page", async ({ page }) => {
        const emailNotificationsLink = page.locator("//a[contains(text(),'Set up email notifications')]");
        await emailNotificationsLink.scrollIntoViewIfNeeded();
        const expectedLink = "https://apps.iqonic.design/frezka/login#/notificationsetting";
        await CommonLinkVerify(page, emailNotificationsLink, expectedLink);
    });

    test("Push notifications link verify on Settings Panel page", async ({ page }) => {
        const pushNotificationsLink = page.locator("//a[contains(text(),'push notifications')]");
        await pushNotificationsLink.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/real-time-notification/";
        await CommonLinkVerify(page, pushNotificationsLink, expectedLink);
    });

    test("Service offerings link verify on Settings Panel page", async ({ page }) => {
        const serviceOfferingsLink = page.locator("//a[contains(text(),'service offerings')]");
        await serviceOfferingsLink.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/services-and-packages/";
        await CommonLinkVerify(page, serviceOfferingsLink, expectedLink);
    });
});