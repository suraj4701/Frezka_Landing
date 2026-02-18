import { expect, test } from '@playwright/test';
import { BookcallVerify, CommonLinkVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, UserappAppstore, UserappPlaystore } from './common';
const home_url = process.env.HOME_URL;
const APP_PRODUCT_URL = "https://frezka.iqonic.design/product/salon-and-spa-flutter-app/";

test.describe('App Product Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover();
        await page.locator("//li[@id='menu-item-1789']//a[@class='ct-menu-link'][normalize-space()='App']").click();
        expect(page.url()).toBe(APP_PRODUCT_URL);
    });

    test("Trustpilot link verify", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Envanto link verify", async ({ page }) => {
        const envantoLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]/img[1]");
        await EnvantoVerify(page, envantoLinkLocator);
    });

    test("Playstore link verify", async ({ page }) => {
        const userappplaystoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await UserappPlaystore(page, userappplaystoreLinkLocator);
    });

    test("Envanto Frezka link verify", async ({ page }) => {
        const envantoFrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoFrezkaVerify(page, envantoFrezkaLinkLocator);
    });

    test("Book a Quick call", async ({ page }) => {
        const bookcallLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, bookcallLinkLocator);
    });

    test("Booking appointments", async ({ page }) => {
        const bookingAppointmentsLinkLocator = page.locator("//a[contains(text(),'booking appointments')]");
        await bookingAppointmentsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://frezka.iqonic.design/feature/online-appointment-booking-and-scheduling/";
        await CommonLinkVerify(page, bookingAppointmentsLinkLocator, expectedLink);
    });

    test("Payment methods", async ({ page }) => {
        const paymentMethodsLinkLocator = page.locator("//a[contains(text(),'payment methods')]");
        await paymentMethodsLinkLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://apps.iqonic.design/frezka/admin/login";
        await CommonLinkVerify(page, paymentMethodsLinkLocator, expectedLink);
    });

    test("Playstore link verify (bottom section)", async ({ page }) => {
        const userappplaystoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[15]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/img[1]");
        await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
        await UserappPlaystore(page, userappplaystoreLinkLocator);
    });

    test("Appstore link verify", async ({ page }) => {
        const userappAppstoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[15]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
        await userappAppstoreLinkLocator.scrollIntoViewIfNeeded();
        await UserappAppstore(page, userappAppstoreLinkLocator);
    });
});