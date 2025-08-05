import { expect, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, TrustpilotVerify, UserappAppstore, UserappPlaystore } from './common';
const home_url = process.env.HOME_URL;
const For_Developers_URL = "https://frezka.iqonic.design/salon-and-spa-software-for-developers/";

test.describe('For Developers Feature Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]").hover();
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/ul[1]/li[1]/a[1]").click();
        expect(page.url()).toBe(For_Developers_URL);
    });

    test("Trustpilot link verify", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]/img[1]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Book a Quick call link verify", async ({ page }) => {
        const bookcallLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, bookcallLinkLocator);
    });

    test("Set of features link verify", async ({ page }) => {
        const setOfFeaturesLinkLocator = page.locator("//a[contains(text(),'set of features')]");
        await setOfFeaturesLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/online-appointment-booking-and-scheduling/";
        await CommonLinkVerify(page, setOfFeaturesLinkLocator, expectedLink);
    });

    test("User App Playstore link verify", async ({ page }) => {
        const userAppPlaystoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
        await userAppPlaystoreLinkLocator.scrollIntoViewIfNeeded();
        await UserappPlaystore(page, userAppPlaystoreLinkLocator);
    });

    test("User App Appstore link verify", async ({ page }) => {
        const userAppAppstoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]/img[1]");
        await userAppAppstoreLinkLocator.scrollIntoViewIfNeeded();
        await UserappAppstore(page, userAppAppstoreLinkLocator);
    });

    test("Custom Development Work link verify", async ({ page }) => {
        const customDevWorkLinkLocator = page.locator("//a[contains(text(),'custom development work')]");
        await customDevWorkLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://iqonic.tech/";
        await CommonLinkVerify(page, customDevWorkLinkLocator, expectedLink);
    });
});