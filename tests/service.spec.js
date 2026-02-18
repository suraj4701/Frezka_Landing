import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, WebsiteVerify } from './common';
const HOME_URL = process.env.HOME_URL;
const SERVICES_PAGE_URL = "https://frezka.iqonic.design/feature/services-and-packages/";

test.describe('Services Page Link Verifications', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(HOME_URL);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover();
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[2]/a[1]").click();
        expect(page.url()).toBe(SERVICES_PAGE_URL);
    });

    test("Envanto Frezka link verify", async ({ page }) => {
        const envantoFrezkaLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-5b56233 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
        await EnvantoFrezkaVerify(page, envantoFrezkaLinkLocator);
    });

    test("Website link verify", async ({ page }) => {
        const adminpanelLinkLocator = page.locator("//a[normalize-space()='View Demo']");
        await WebsiteVerify(page, adminpanelLinkLocator);
    });

    test("Trustpilot link verify", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//img[contains(@class,'attachment-large size-large wp-image-155')]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto link verify", async ({ page }) => {
        const envantoLinkLocator = page.locator("//img[@class='attachment-large size-large wp-image-856']");
        await EnvantoVerify(page, envantoLinkLocator);
    });

    test("Book a Quick call link verify", async ({ page }) => {
        await page.waitForTimeout(2000);
        const bookCallLinkLocator = page.locator("//a[normalize-space()='Book a quick call.']");
        await BookcallVerify(page, bookCallLinkLocator);
    });

    test("List of Services", async ({ page }) => {
        const appointmentsLinkLocator = page.locator("//a[normalize-space()='list of services']");
        await appointmentsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/multi-branch-support/";
        await AdminPanelVerify(page, appointmentsLinkLocator, expectedLink);
    });

    test("Assign Services to specific staff members", async ({ page }) => {
        const appointmentsLinkLocator = page.locator("//a[normalize-space()='assign services to specific staff members']");
        await appointmentsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/multi-branch-support/";
        await AdminPanelVerify(page, appointmentsLinkLocator, expectedLink);
    });
});