const { test, expect } = require('@playwright/test');
const { TrustpilotVerify, EnvantoVerify, AdminPanelVerify, EnvantoFrezkaVerify } = require('./common');
const home_url = process.env.HOME_URL;

test("AdminPanel Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[1]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/laravel-admin-panel/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("AdminPanel Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[1]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/laravel-admin-panel/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]/img[1]");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("AdminPanel Admin Panel link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[1]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/laravel-admin-panel/");
    const adminpanelLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("AdminPanel Envanto Frezka link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[1]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/laravel-admin-panel/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoFrezkaVerify(page, trustpilotLinkLocator);
})

test("AdminPanel visual analytics", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[1]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/laravel-admin-panel/");
    const envantofrezkaLinkLocator = page.locator("//a[contains(text(),'visual analytics')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/frezka/login");
})

test("AdminPanel scheduling and management", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[1]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/laravel-admin-panel/");
    const envantofrezkaLinkLocator = page.locator("//a[contains(text(),'scheduling and management')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/feature/online-appointment-booking-and-scheduling/");
})