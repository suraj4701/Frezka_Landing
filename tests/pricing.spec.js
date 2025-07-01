const { test, expect } = require('@playwright/test');
const { EnvantoFrezkaVerify, BuyServiceVerify } = require('./common');
const home_url = process.env.HOME_URL;

test("pricing Buy now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/pricing/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, trustpilotLinkLocator);
})

test("pricing buy service", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/pricing/");
    const envantofrezkaLinkLocator = page.locator("//a[contains(text(),'Buy Service')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await BuyServiceVerify(page, envantofrezkaLinkLocator);
})