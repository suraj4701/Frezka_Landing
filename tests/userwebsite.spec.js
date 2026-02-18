import { expect, test } from '@playwright/test';
import { BookcallVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;
const ADMIN_PANEL_PRODUCT_URL = "https://frezka.iqonic.design/product/salon-and-spa-management-software/";

test.describe('User Website Product Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover();
        await page.locator("//li[@id='menu-item-9227']//a[@class='ct-menu-link'][normalize-space()='User Website']").click();
        expect(page.url()).toBe(ADMIN_PANEL_PRODUCT_URL);
    });

    test("Trustpilot link verify", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//img[contains(@class,'attachment-large size-large wp-image-155')]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto link verify", async ({ page }) => {
        const envantoLinkLocator = page.locator("//img[@class='attachment-large size-large wp-image-856']");
        await EnvantoVerify(page, envantoLinkLocator);
    });

    test("User Website link verify", async ({ page }) => {
        const userWebsiteLinkLocator = page.locator("//a[normalize-space()='Try Demo']");
        await WebsiteVerify(page, userWebsiteLinkLocator);
    });

    test("Envanto Frezka link verify", async ({ page }) => {
        const envantoFrezkaLinkLocator = page.locator("//div[@class='elementor-element elementor-element-f54feba elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-elementskit-button']//div[@class='ekit-btn-wraper']");
        await EnvantoFrezkaVerify(page, envantoFrezkaLinkLocator);
    });

    test("Book a Quick call", async ({ page }) => {
        const bookcallLinkLocator = page.locator("//a[normalize-space()='Book a quick call.']");
        await BookcallVerify(page, bookcallLinkLocator);
    });
});