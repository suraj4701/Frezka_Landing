import { test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CommonLinkVerify, UserappAppstore, UserappPlaystore, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test("ExploreNow Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//div[@data-items='primary']//a[@aria-label='Explore Now'][normalize-space()='Explore Now']");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])
    const EnvantoVerifyLocator = newPage.locator("//a[normalize-space()='Book a quick call.']");
    await BookcallVerify(newPage, EnvantoVerifyLocator);
})

test("ExploreNow User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//div[@data-items='primary']//a[@aria-label='Explore Now'][normalize-space()='Explore Now']");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const adminpanelLocator = newPage.locator("//img[@class='attachment-full size-full wp-image-249']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(newPage, adminpanelLocator);
})

test("ExploreNow User App Appstore", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//div[@data-items='primary']//a[@aria-label='Explore Now'][normalize-space()='Explore Now']");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const adminpanelLocator = newPage.locator("//img[@class='attachment-full size-full wp-image-250']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserappAppstore(newPage, adminpanelLocator);
})

test("ExploreNow Website View Demo", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//div[@data-items='primary']//a[@aria-label='Explore Now'][normalize-space()='Explore Now']");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const adminpanelLocator = newPage.locator("//a[@href='https://apps.iqonic.design/frezka/']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await WebsiteVerify(newPage, adminpanelLocator);
})

test("ExploreNow Admin Panel View Demo", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//div[@data-items='primary']//a[@aria-label='Explore Now'][normalize-space()='Explore Now']");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const adminpanelLocator = newPage.locator("//a[contains(@href,'https://apps.iqonic.design/frezka/admin/login')]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(newPage, adminpanelLocator);
})

test("ExploreNow Contact Us", async ({ page }) => {
    await page.goto(home_url);
    const explorenow = page.locator("//div[@data-items='primary']//a[@aria-label='Explore Now'][normalize-space()='Explore Now']");

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        explorenow.click()
    ])

    const Locator = newPage.locator("//a[normalize-space()='Contact Us']");
    await Locator.scrollIntoViewIfNeeded();
    const expectedLink = "https://iqonic.tech/contact-us/";
    await CommonLinkVerify(newPage, Locator, expectedLink);
})