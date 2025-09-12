import { expect, test } from '@playwright/test';
import { AdminPanelVerify, CommonLinkVerify, EnvantoFrezkaVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe('More Section Links Verification', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
    });

    test("Hire Us link verify", async ({ page }) => {
        const hireUsLinkLocator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[6]/a[1]");
        const expectedLink = "https://iqonic.tech/";
        await CommonLinkVerify(page, hireUsLinkLocator, expectedLink);
    });

    test("Book Demo Call link verify", async ({ page }) => {
        await page.locator("li[id='menu-item-4746'] a[class='ct-menu-link']").click()
        const newPageUrl = page.url();
        expect(newPageUrl).toBe("https://frezka.iqonic.design/frezka-demo-call/");
    });

    test("Buy Now", async ({ page }) => {
        const bookDemoCallLinkLocator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/a[1]");
        await EnvantoFrezkaVerify(page, bookDemoCallLinkLocator);
    });

    test("Try Demo", async ({ page }) => {
        const bookDemoCallLinkLocator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/a[1]");
        await AdminPanelVerify(page, bookDemoCallLinkLocator);
    });
});