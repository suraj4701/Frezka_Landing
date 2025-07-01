const { test, expect } = require('@playwright/test');
const { TrustpilotVerify, EnvantoVerify, AdminPanelVerify, EnvantoFrezkaVerify } = require('./common');
const home_url = process.env.HOME_URL;

test("Powerful settings panel Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[10]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/powerful-settings-panel/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Powerful settings panel Envanto Frezka link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[10]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/powerful-settings-panel/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoFrezkaVerify(page, trustpilotLinkLocator);
})

test("Powerful settings panel Admin Panel link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[10]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/powerful-settings-panel/");
    const adminpanelLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("Powerful settings panel Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[10]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/powerful-settings-panel/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]/img[1]");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("Powerful settings panel various payment methods", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[10]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/powerful-settings-panel/");
    const envantofrezkaLinkLocator = page.locator("//a[contains(text(),'various payment methods')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/feature/online-and-offline-payment-options/");
})

test("Powerful settings panel manage staff commissions", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[10]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/powerful-settings-panel/");
    const envantofrezkaLinkLocator = page.locator("//a[contains(text(),'manage staff commissions')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/frezka/login");
})

test("Powerful settings panel Set up email notifications", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[10]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/powerful-settings-panel/");
    const envantofrezkaLinkLocator = page.locator("//a[contains(text(),'Set up email notifications')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/frezka/login#/notificationsetting");
})

test("Powerful settings panel push notifications", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[10]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/powerful-settings-panel/");
    const envantofrezkaLinkLocator = page.locator("//a[contains(text(),'push notifications')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/feature/real-time-notification/");
})

test("Powerful settings panel service offerings", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[10]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/powerful-settings-panel/");
    const envantofrezkaLinkLocator = page.locator("//a[contains(text(),'service offerings')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/feature/services-and-packages/");
})