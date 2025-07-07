import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("Staff Management Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/staff-management-and-scheduling/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Staff Management Envanto Frezka link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/staff-management-and-scheduling/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoFrezkaVerify(page, trustpilotLinkLocator);
})

test("Staff Management Admin Panel link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/staff-management-and-scheduling/");
    const adminpanelLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("Staff Management Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/staff-management-and-scheduling/");
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]/img[1]");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("Staff Management Book a Quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]").hover()
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/li[3]/a[1]").click()
    const PageUrl = page.url();
    expect(PageUrl).toBe("https://frezka.iqonic.design/feature/staff-management-and-scheduling/");
    const userappplaystoreLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(page, userappplaystoreLinkLocator);
})