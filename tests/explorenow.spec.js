import { test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CommonLinkVerify, UserappAppstore, UserappPlaystore, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe('ExploreNow Page Tests', () => {
    let newPage;

    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        const explorenow = page.locator("//div[@data-items='primary']//a[@aria-label='Explore Now'][normalize-space()='Explore Now']");

        const [pageEvent] = await Promise.all([
            page.context().waitForEvent('page'),
            explorenow.click()
        ]);
        newPage = pageEvent;
    });

    test("Book a quick call", async () => {
        const EnvantoVerifyLocator = newPage.locator("//a[normalize-space()='Book a quick call.']");
        await BookcallVerify(newPage, EnvantoVerifyLocator);
    });

    test("User App Playstore", async () => {
        const adminpanelLocator = newPage.locator("//img[@class='attachment-full size-full wp-image-249']");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await UserappPlaystore(newPage, adminpanelLocator);
    });

    test("User App Appstore", async () => {
        const adminpanelLocator = newPage.locator("//img[@class='attachment-full size-full wp-image-250']");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await UserappAppstore(newPage, adminpanelLocator);
    });

    test("Website View Demo", async () => {
        const adminpanelLocator = newPage.locator("//a[@href='https://apps.iqonic.design/frezka/']");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await WebsiteVerify(newPage, adminpanelLocator);
    });

    test("Admin Panel View Demo", async () => {
        const adminpanelLocator = newPage.locator("//a[contains(@href,'https://apps.iqonic.design/frezka/admin/login')]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(newPage, adminpanelLocator);
    });

    test("Contact Us", async () => {
        const Locator = newPage.locator("//a[normalize-space()='Contact Us']");
        await Locator.scrollIntoViewIfNeeded();
        const expectedLink = "https://iqonic.tech/contact-us/";
        await CommonLinkVerify(newPage, Locator, expectedLink);
    });
});