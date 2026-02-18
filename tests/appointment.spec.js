import { expect, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;
const APPOINTMENT_SCHEDULING_URL = "https://frezka.iqonic.design/feature/online-appointment-booking-and-scheduling/";

test.describe('Appointment Booking and Scheduling Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover();
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[1]/a[1]").click();
        expect(page.url()).toBe(APPOINTMENT_SCHEDULING_URL);
    });

    test("Envanto Frezka link verify", async ({ page }) => {
        const envantoFrezkaLinkLocator = page.locator("//div[@class='elementor-element elementor-element-5b56233 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-elementskit-button']//div[@class='ekit-btn-wraper']");
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
        const envantoLinkLocator = page.locator("//img[contains(@class,'attachment-large size-large wp-image-856')]");
        await EnvantoVerify(page, envantoLinkLocator);
    });

    test("Book a Quick call", async ({ page }) => {
        const bookcallLinkLocator = page.locator("//a[normalize-space()='Book a quick call.']");
        await BookcallVerify(page, bookcallLinkLocator);
    });

    test("Manage Appointments across multiple branches", async ({ page }) => {
        const appointmentsLinkLocator = page.locator("//a[normalize-space()='manage appointments across multiple branches']");
        await appointmentsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/multi-branch-support/";
        await CommonLinkVerify(page, appointmentsLinkLocator, expectedLink);
    });
});