import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CommonLinkVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;
const ADMIN_PANEL_PRODUCT_URL = "https://frezka.iqonic.design/product/laravel-admin-panel/";

test.describe('Admin Panel Product Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover();
        await page.locator("//li[@id='menu-item-1788']//a[@class='ct-menu-link'][normalize-space()='Admin Panel']").click();
        expect(page.url()).toBe(ADMIN_PANEL_PRODUCT_URL);
    });

    test("Trustpilot link verify", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto link verify", async ({ page }) => {
        const envantoLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]/img[1]");
        await EnvantoVerify(page, envantoLinkLocator);
    });

    test("Admin Panel link verify", async ({ page }) => {
        const adminpanelLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await AdminPanelVerify(page, adminpanelLinkLocator);
    });

    test("Envanto Frezka link verify", async ({ page }) => {
        const envantoFrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoFrezkaVerify(page, envantoFrezkaLinkLocator);
    });

    test("Book a Quick call", async ({ page }) => {
        const bookcallLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, bookcallLinkLocator);
    });

    test("Visual analytics", async ({ page }) => {
        const visualAnalyticsLinkLocator = page.locator("//a[contains(text(),'visual analytics')]");
        await visualAnalyticsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://apps.iqonic.design/frezka/admin/login";
        await CommonLinkVerify(page, visualAnalyticsLinkLocator, expectedLink);
    });

    test("Scheduling and management", async ({ page }) => {
        const schedulingLinkLocator = page.locator("//a[contains(text(),'scheduling and management')]");
        await schedulingLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/online-appointment-booking-and-scheduling/";
        await CommonLinkVerify(page, schedulingLinkLocator, expectedLink);
    });
});