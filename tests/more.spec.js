const { test, expect } = require('@playwright/test');

test("More Hire Us", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    const support = await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[6]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        support.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/");
})

test("More Book Demo Call", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/");
    await page.waitForTimeout(2000)
    await page.locator("//a[contains(text(),'Book Demo Call 📞')]").click()

    const newPageUrl = page.url();
    expect(newPageUrl).toContain("https://tidycal.com/iqonicdesign/frezka-demo-call");
    const iqonicDesignSpanLocator = page.locator("//h1[contains(text(),'Frezka - Demo Call')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Frezka - Demo Call");
});
