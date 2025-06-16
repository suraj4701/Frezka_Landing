const { test, expect } = require('@playwright/test');
const { TrustpilotVerify, UserappPlaystore, UserappAppstore } = require('./common');

test("Trustpilot link verify", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/ul[1]/li[1]/a[1]").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Set for features", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/ul[1]/li[1]/a[1]").click()
    const pagelocator = page.locator("//a[contains(text(),'set of features')]");
    await pagelocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        pagelocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/feature/online-appointment-booking-and-scheduling/");
    const iqonicDesignSpanLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h2[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Simplify Your Salon');
})

test("User App playstore link verify", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/ul[1]/li[1]/a[1]").click()
    const userappplaystoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("User App Appstore link verify", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/ul[1]/li[1]/a[1]").click()
    const userappAppstoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]/img[1]");
    await userappAppstoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappAppstore(page, userappAppstoreLinkLocator);
})

test("Custom Development Work", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[1]/ul[1]/li[1]/a[1]").click()
    const envantofrezkaLinkLocator = page.locator("//a[contains(text(),'custom development work')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'Delivered Faster and Smart')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Custom Tech Solutions,  Delivered Faster and Smarter');
})