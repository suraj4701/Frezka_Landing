import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, BuyServiceVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, UserappAppstore, UserappPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("Home Page Showing", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const headingname = await page.locator("//h6[normalize-space()='Effortless Salon Management']").textContent()
    const trimmedHeadingname = headingname.trim();
    expect(trimmedHeadingname).toBe("Effortless Salon Management")
})

test("Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]/img[1]");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("User App playstore link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const userappplaystoreLinkLocator = page.locator("//a[normalize-space()='User App']");
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Admin Panel link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const adminpanelLinkLocator = page.locator("//a[contains(@class,'whitespace--normal')][normalize-space()='Admin Panel']");
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("Home Book a Quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const userappplaystoreLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(page, userappplaystoreLinkLocator);
})

test("Home Book a Quick call 2", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const userappplaystoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, userappplaystoreLinkLocator);
})

test("Admin Panel link verify 2", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const adminpanelLinkLocator = page.locator("//a[normalize-space()='View Demo']");
    await adminpanelLinkLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, adminpanelLinkLocator);
})

test("User App Appstore link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const userappAppstoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await userappAppstoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappAppstore(page, userappAppstoreLinkLocator);
})

test("User App playstore link verify 2", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const userappplaystoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/img[1]");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await UserappPlaystore(page, userappplaystoreLinkLocator);
})

test("Home Book a Quick call 3", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const userappplaystoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await userappplaystoreLinkLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, userappplaystoreLinkLocator);
})

test("learn button verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/feature/online-appointment-booking-and-scheduling/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/feature/online-appointment-booking-and-scheduling/");
    const iqonicDesignSpanLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h2[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Simplify Your Salon');
});

test("business onwer learn button verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[14]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/spa-and-salon-software-for-business-owners/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/spa-and-salon-software-for-business-owners/");
});

test("for developers learn button verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[14]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/salon-and-spa-software-for-developers/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/salon-and-spa-software-for-developers/");
});

test("book demo call link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const bookcallLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[15]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await bookcallLinkLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, bookcallLinkLocator);
})

test("Envanto frezka link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Envanto frezka link verify 2", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("buy service link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const burserviceLinkLocator = page.locator("//a[contains(text(),'Buy Service')]");
    await burserviceLinkLocator.scrollIntoViewIfNeeded();
    await BuyServiceVerify(page, burserviceLinkLocator);
})

test("Envanto frezka link verify 3", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[18]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Salon Booking Software", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//span[contains(text(),'Salon booking software')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/salon-booking-software/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/salon-booking-software/");
    const iqonicDesignSpanLocator = page.locator("//h2[contains(text(),'Simplify Salon Bookings & Amplify Your Business Gr')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Simplify Salon Bookings & Amplify Your Business Growth!');
});

test("Salon Software", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//span[contains(text(),'Salon software')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/salon-software/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/salon-software/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Effortless Salon Management')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Effortless Salon Management");
});

test("Spa Scheduling Software", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//span[contains(text(),'Spa scheduling software')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/spa-scheduling-software/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/spa-scheduling-software/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Effortless Salon Management')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Effortless Salon Management");
});

test("Hair Salon Software", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//span[contains(text(),'Hair salon software')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/hair-salon-software/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/hair-salon-software/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Effortless Salon Management')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Effortless Salon Management");
});

test("Medical Spa Software", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//span[contains(text(),'Medical spa software')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/medical-spa-software/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/medical-spa-software/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Effortless Salon Management')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Effortless Salon Management");
});

test("Software for spas", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//span[contains(text(),'Software for spas')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/software-for-spas/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/software-for-spas/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Effortless Salon Management')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Effortless Salon Management");
});

test("Gym management software", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//span[contains(text(),'Gym management software')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/gym-management-software/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/gym-management-software/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Effortless Salon Management')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Effortless Salon Management");
});

test("Fitness Software", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//span[contains(text(),'Fitness software')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/fitness-software/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/fitness-software/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Effortless Salon Management')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Effortless Salon Management");
});

test("Nail Salon Software", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//span[contains(text(),'Nail Salon Software')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/nail-salon-software/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/nail-salon-software/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Effortless Salon Management')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Effortless Salon Management");
});

test("Barbershop Software", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//span[contains(text(),'Barbershop software')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/barbershop-software/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/barbershop-software/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Effortless Salon Management')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Effortless Salon Management");
});

test("Massage Salon Software", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//span[contains(text(),'Massage Salon Software')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/massage-salon-software/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/massage-salon-software/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Effortless Salon Management')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Effortless Salon Management");
});

test("Personal Trainer Software", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//span[contains(text(),'Personal trainer software')]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/personal-trainer-software/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/personal-trainer-software/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Effortless Salon Management')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Effortless Salon Management");
});

test("Frezka Logo", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Effortless Salon Management')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Effortless Salon Management");
});

test("Facebook link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[1]/a[1]/i[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.facebook.com/iqonicdesign");
})

test("YouTube link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[2]/a[1]/i[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.youtube.com/c/IqonicDesign");
})

test("X Twitter link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[3]/a[1]/i[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://x.com/iqonicdesign");
})

test("Instagram link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[4]/a[1]/i[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.instagram.com/iqonicdesign/");
})

test("Footer Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[1]/a[1]/span[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/product/laravel-admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/product/laravel-admin-panel/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Admin Panel')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Admin Panel");
});

test("Footer Mobile App", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[2]/a[1]/span[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/product/salon-and-spa-flutter-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/product/salon-and-spa-flutter-app/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'Mobile App')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Mobile App");
});

test("Footer Docs", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/documentation/frezka-doc/build/");
    const iqonicDesignSpanLocator = newPage.locator("//h2[contains(text(),'Installation')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Installation');
})

test("Footer FAQs", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/faq/");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'FAQs')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('FAQs');
})

test("Footer Roadmap", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[3]/a[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/roadmap/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/roadmap/");
    const iqonicDesignSpanLocator = page.locator("//li[contains(text(),'Roadmap')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("Roadmap");
});

test("Footer Support", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'Support Desk')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Support Desk');
})

test("Footer Pricing", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka.iqonic.design/pricing/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/pricing/");
    const iqonicDesignSpanLocator = page.locator("//h6[contains(text(),'REGULAR VS EXTENDED')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain("REGULAR VS EXTENDED");
});

test("Footer Get A Quote", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[3]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/cost-calculator/");
    const iqonicDesignSpanLocator = newPage.locator("//h3[contains(text(),'Calculate The Project Estimate Price')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Calculate The Project Estimate Price');
})

test("Footer License", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[4]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.design/licensing-terms-more/");
    const iqonicDesignSpanLocator = newPage.locator("//h2[contains(text(),'Licensing, Terms & More...')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Licensing, Terms & More...');
})

test("Footer hire us", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[5]/a[1]");
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

test("Footer Iqonic Design", async ({ page }) => {
    await page.goto(home_url);
    await page.waitForTimeout(2000)
    const envantofrezkaLinkLocator = page.locator("//a[contains(text(),'Iqonic Design.')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        envantofrezkaLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.design/");
    const iqonicDesignSpanLocator = newPage.locator("//h2[contains(text(),'Production Ready Code Scripts & Design Templates F')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Production Ready Code Scripts & Design Templates For Your Next Project');
})