const { test, expect } = require('@playwright/test');
const home_url = process.env.HOME_URL;

test("More Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const support = await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[6]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        support.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/");
})

test("More Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//a[contains(text(),'Book Demo Call 📞')]").click()

    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://tidycal.com/iqonicdesign/frezka-demo-call");
    const iqonicDesignSpanLocator = page.locator("//h1[contains(text(),'Frezka - Demo Call')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Frezka - Demo Call");
});