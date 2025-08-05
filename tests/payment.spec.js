import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CommonLinkVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;
const PAYMENT_FEATURE_URL = "https://frezka.iqonic.design/feature/online-and-offline-payment-options/";

test.describe('Payment Online & Offline Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover();
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[4]/a[1]").click();
        expect(page.url()).toBe(PAYMENT_FEATURE_URL);
    });

    test("Trustpilot link verify on Payment page", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto Frezka link verify on Payment page", async ({ page }) => {
        const envantoFrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoFrezkaVerify(page, envantoFrezkaLinkLocator);
    });

    test("Admin Panel link verify on Payment page", async ({ page }) => {
        const adminPanelLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await AdminPanelVerify(page, adminPanelLinkLocator);
    });

    test("Envanto link verify on Payment page", async ({ page }) => {
        const envantoLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]/img[1]");
        await EnvantoVerify(page, envantoLinkLocator);
    });

    test("Book a Quick call link verify on Payment page", async ({ page }) => {
        const bookCallLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("Clients link verify on Payment page", async ({ page }) => {
        const clientsLinkLocator = page.locator("//a[contains(text(),'clients')]");
        await clientsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/client-management-system/";
        await CommonLinkVerify(page, clientsLinkLocator, expectedLink);
    });

    test("Financial Management link verify on Payment page", async ({ page }) => {
        const adminpanelLinkLocator = page.locator("//a[contains(text(),'financial management')]");
        await AdminPanelVerify(page, adminpanelLinkLocator);
    });
});