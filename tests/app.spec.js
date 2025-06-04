const { test, expect } = require('@playwright/test');
const { TrustpilotVerify, EnvantoVerify, EnvantoFrezkaVerify, UserappPlaystore, UserappAppstore } = require('./common');

test("App Trustpilot link verify", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[2]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/salon-and-spa-flutter-app/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("App Envanto link verify", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[2]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/salon-and-spa-flutter-app/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]/img[1]");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("App playstore link verify", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[2]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/salon-and-spa-flutter-app/");
    const userappplaystoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("App Envanto Frezka link verify", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[2]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/salon-and-spa-flutter-app/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoFrezkaVerify(page, trustpilotLinkLocator);
})

test("App booking appointments", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[2]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/salon-and-spa-flutter-app/");
    const envantofrezkaLinkLocator = page.locator("//a[contains(text(),'booking appointments')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/feature/online-appointment-booking-and-scheduling/");
})

test("App payment methods", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[2]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/salon-and-spa-flutter-app/");
    const envantofrezkaLinkLocator = page.locator("//a[contains(text(),'payment methods')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/frezka/login#/payment-method");
})

test("App playstore link verify2", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[2]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/salon-and-spa-flutter-app/");
    const userappplaystoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[15]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/img[1]");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("App Appstore link verify", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[2]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/product/salon-and-spa-flutter-app/");
    const userappAppstoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[15]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await userappAppstoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappAppstore(page, userappAppstoreLinkLocator);
})