const { test, expect } = require('@playwright/test');

test("GetHelp Support", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[5]/a[1]").hover()
    const support = await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[5]/ul[1]/li[2]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        support.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
})

test("GetHelp Blog", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[5]/a[1]").hover()
    const blog = await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[5]/ul[1]/li[3]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        blog.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.design/blog-category/frezka/");
})

test("GetHelp Documentation", async ({ page }) => {
    await page.goto("https://frezka.iqonic.design/")
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[5]/a[1]").hover()
    const blog = await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[5]/ul[1]/li[1]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        blog.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/documentation/frezka-doc/build/");
})