import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, BuyServiceVerify, CommonLinkVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, UserappAppstore, UserappPlaystore } from './common';
const home_url = process.env.HOME_URL;

test.describe('Homepage General Verification', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
    });

    test("Home Page Heading Displayed and Content", async ({ page }) => {
        const headingLocator = page.locator("//h6[normalize-space()='Effortless Salon Management']");
        const headingText = await headingLocator.textContent();
        expect(headingText?.trim()).toBe("Effortless Salon Management");
    });

    test.describe('Hero Section Links', () => {
        test("Trustpilot link verify", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, trustpilotLinkLocator);
        });

        test("Envanto link verify", async ({ page }) => {
            const envantoLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]/img[1]");
            await EnvantoVerify(page, envantoLinkLocator);
        });

        test("User App Playstore link verify (Hero Section)", async ({ page }) => {
            const userAppPlaystoreLinkLocator = page.locator("//a[normalize-space()='User App']");
            await UserappPlaystore(page, userAppPlaystoreLinkLocator);
        });

        test("Admin Panel link verify (Hero Section)", async ({ page }) => {
            const adminPanelLinkLocator = page.locator("//a[contains(@class,'whitespace--normal')][normalize-space()='Admin Panel']");
            await AdminPanelVerify(page, adminPanelLinkLocator);
        });

        test("Book a Quick call link verify (Hero Section 1)", async ({ page }) => {
            const bookCallLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
            await BookcallVerify(page, bookCallLinkLocator);
        });
    });

    test.describe('Mid-Page Links & CTA Verification', () => {
        test("Book a Quick call link verify (Section 2)", async ({ page }) => {
            const bookCallLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await bookCallLinkLocator.scrollIntoViewIfNeeded();
            await BookcallVerify(page, bookCallLinkLocator);
        });

        test("Admin Panel link verify (Section 2 - View Demo)", async ({ page }) => {
            const adminPanelLinkLocator = page.locator("//a[normalize-space()='View Demo']");
            await adminPanelLinkLocator.scrollIntoViewIfNeeded();
            await AdminPanelVerify(page, adminPanelLinkLocator);
        });

        test("User App Appstore link verify (Mid-page)", async ({ page }) => {
            const userAppAppstoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
            await userAppAppstoreLinkLocator.scrollIntoViewIfNeeded();
            await UserappAppstore(page, userAppAppstoreLinkLocator);
        });

        test("User App Playstore link verify (Mid-page)", async ({ page }) => {
            const userAppPlaystoreLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/img[1]");
            await userAppPlaystoreLinkLocator.scrollIntoViewIfNeeded();
            await UserappPlaystore(page, userAppPlaystoreLinkLocator);
        });

        test("Book a Quick call link verify (Section 3)", async ({ page }) => {
            const bookCallLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await bookCallLinkLocator.scrollIntoViewIfNeeded();
            await BookcallVerify(page, bookCallLinkLocator);
        });

        test("Learn button verify (Online Appointment Scheduling)", async ({ page }) => {
            await page.waitForTimeout(2000)
            const learnButtonLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await learnButtonLocator.scrollIntoViewIfNeeded();
            await learnButtonLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/feature/online-appointment-booking-and-scheduling/");
            expect(page.url()).toBe("https://frezka.iqonic.design/feature/online-appointment-booking-and-scheduling/");
        });

        test("Business Owner Learn button verify", async ({ page }) => {
            await page.waitForTimeout(2000)
            const learnButtonLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[14]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await learnButtonLocator.scrollIntoViewIfNeeded();
            await learnButtonLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/spa-and-salon-software-for-business-owners/");
            expect(page.url()).toBe("https://frezka.iqonic.design/spa-and-salon-software-for-business-owners/");
        });

        test("For Developers Learn button verify", async ({ page }) => {
            await page.waitForTimeout(2000)
            const learnButtonLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[14]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await learnButtonLocator.scrollIntoViewIfNeeded();
            await learnButtonLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/salon-and-spa-software-for-developers/");
            expect(page.url()).toBe("https://frezka.iqonic.design/salon-and-spa-software-for-developers/");
        });

        test("Book Demo Call link verify (Mid-page)", async ({ page }) => {
            const bookCallLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[15]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await bookCallLinkLocator.scrollIntoViewIfNeeded();
            await BookcallVerify(page, bookCallLinkLocator);
        });

        test("Envanto Frezka link verify (Section 1)", async ({ page }) => {
            const envantoFrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
            await envantoFrezkaLinkLocator.scrollIntoViewIfNeeded();
            await EnvantoFrezkaVerify(page, envantoFrezkaLinkLocator);
        });

        test("Envanto Frezka link verify (Section 2)", async ({ page }) => {
            const envantoFrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[17]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
            await envantoFrezkaLinkLocator.scrollIntoViewIfNeeded();
            await EnvantoFrezkaVerify(page, envantoFrezkaLinkLocator);
        });

        test("Buy Service link verify", async ({ page }) => {
            const buyServiceLinkLocator = page.locator("//a[contains(text(),'Buy Service')]");
            await buyServiceLinkLocator.scrollIntoViewIfNeeded();
            await BuyServiceVerify(page, buyServiceLinkLocator);
        });

        test("Envanto Frezka link verify (Section 3)", async ({ page }) => {
            const envantoFrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[18]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await envantoFrezkaLinkLocator.scrollIntoViewIfNeeded();
            await EnvantoFrezkaVerify(page, envantoFrezkaLinkLocator);
        });
    });

    test.describe('Footer Navigation Links', () => {
        test("Salon Booking Software link verify (Footer)", async ({ page }) => {
            const linkLocator = page.locator("//span[contains(text(),'Salon booking software')]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/salon-booking-software/");
            expect(page.url()).toBe("https://frezka.iqonic.design/salon-booking-software/");
            const headingLocator = page.locator("//h2[contains(text(),'Simplify Salon Bookings & Amplify Your Business Gr')]");
            expect(await headingLocator.textContent()).toContain('Simplify Salon Bookings & Amplify Your Business Growth!');
        });

        test("Salon Software link verify (Footer)", async ({ page }) => {
            await page.waitForTimeout(2000)
            const linkLocator = page.locator("//span[contains(text(),'Salon software')]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/salon-software/");
            expect(page.url()).toBe("https://frezka.iqonic.design/salon-software/");
        });

        test("Spa Scheduling Software link verify (Footer)", async ({ page }) => {
            const linkLocator = page.locator("//span[contains(text(),'Spa scheduling software')]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/spa-scheduling-software/");
            expect(page.url()).toBe("https://frezka.iqonic.design/spa-scheduling-software/");
        });

        test("Hair Salon Software link verify (Footer)", async ({ page }) => {
            const linkLocator = page.locator("//span[contains(text(),'Hair salon software')]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/hair-salon-software/");
            expect(page.url()).toBe("https://frezka.iqonic.design/hair-salon-software/");
        });

        test("Medical Spa Software link verify (Footer)", async ({ page }) => {
            await page.waitForTimeout(2000)
            const linkLocator = page.locator("//span[contains(text(),'Medical spa software')]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/medical-spa-software/");
            expect(page.url()).toBe("https://frezka.iqonic.design/medical-spa-software/");
        });

        test("Software for spas link verify (Footer)", async ({ page }) => {
            await page.waitForTimeout(2000)
            const linkLocator = page.locator("//span[contains(text(),'Software for spas')]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/software-for-spas/");
            expect(page.url()).toBe("https://frezka.iqonic.design/software-for-spas/");
        });

        test("Gym management software link verify (Footer)", async ({ page }) => {
            await page.waitForTimeout(2000)
            const linkLocator = page.locator("//span[contains(text(),'Gym management software')]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/gym-management-software/");
            expect(page.url()).toBe("https://frezka.iqonic.design/gym-management-software/");
        });

        test("Fitness Software link verify (Footer)", async ({ page }) => {
            await page.waitForTimeout(2000)
            const linkLocator = page.locator("//span[contains(text(),'Fitness software')]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/fitness-software/");
            expect(page.url()).toBe("https://frezka.iqonic.design/fitness-software/");
        });

        test("Nail Salon Software link verify (Footer)", async ({ page }) => {
            await page.waitForTimeout(2000)
            const linkLocator = page.locator("//span[contains(text(),'Nail Salon Software')]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/nail-salon-software/");
            expect(page.url()).toBe("https://frezka.iqonic.design/nail-salon-software/");
        });

        test("Barbershop Software link verify (Footer)", async ({ page }) => {
            const linkLocator = page.locator("//span[contains(text(),'Barbershop software')]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/barbershop-software/");
            expect(page.url()).toBe("https://frezka.iqonic.design/barbershop-software/");
        });

        test("Massage Salon Software link verify (Footer)", async ({ page }) => {
            await page.waitForTimeout(2000)
            const linkLocator = page.locator("//span[contains(text(),'Massage Salon Software')]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/massage-salon-software/");
            expect(page.url()).toBe("https://frezka.iqonic.design/massage-salon-software/");
        });

        test("Personal Trainer Software link verify (Footer)", async ({ page }) => {
            await page.waitForTimeout(2000)
            const linkLocator = page.locator("//span[contains(text(),'Personal trainer software')]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/personal-trainer-software/");
            expect(page.url()).toBe("https://frezka.iqonic.design/personal-trainer-software/");
        });

        test("Footer Admin Panel link verify", async ({ page }) => {
            const linkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[1]/a[1]/span[1]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/product/laravel-admin-panel/");
            expect(page.url()).toBe("https://frezka.iqonic.design/product/laravel-admin-panel/");
            const headingLocator = page.locator("//h6[contains(text(),'Admin Panel')]");
            expect(await headingLocator.textContent()).toContain("Admin Panel");
        });

        test("Footer Mobile App link verify", async ({ page }) => {
            const linkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[2]/a[1]/span[1]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/product/salon-and-spa-flutter-app/");
            expect(page.url()).toBe("https://frezka.iqonic.design/product/salon-and-spa-flutter-app/");
            const headingLocator = page.locator("//h6[contains(text(),'Mobile App')]");
            expect(await headingLocator.textContent()).toContain("Mobile App");
        });

        test("Footer Docs link verify", async ({ page }) => {
            const linkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[1]/a[1]");
            await linkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://apps.iqonic.design/documentation/frezka-doc/build/";
            await CommonLinkVerify(page, linkLocator, expectedLink);
        });

        test("Footer FAQs link verify", async ({ page }) => {
            const linkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[2]/a[1]");
            await linkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://frezka.iqonic.design/faq/";
            await CommonLinkVerify(page, linkLocator, expectedLink);
        });

        test("Footer Roadmap link verify", async ({ page }) => {
            const linkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[3]/a[1]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/roadmap/");
            expect(page.url()).toBe("https://frezka.iqonic.design/roadmap/");
            const headingLocator = page.locator("//li[contains(text(),'Roadmap')]");
            expect(await headingLocator.textContent()).toContain("Roadmap");
        });

        test("Footer Support link verify", async ({ page }) => {
            const linkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[1]/a[1]");
            await linkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://iqonic.desky.support/";
            await CommonLinkVerify(page, linkLocator, expectedLink);
        });

        test("Footer Pricing link verify", async ({ page }) => {
            await page.waitForTimeout(2000)
            const linkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[2]/a[1]");
            await linkLocator.scrollIntoViewIfNeeded();
            await linkLocator.click();
            await page.waitForURL("https://frezka.iqonic.design/pricing/");
            expect(page.url()).toBe("https://frezka.iqonic.design/pricing/");
            const headingLocator = page.locator("//h6[contains(text(),'REGULAR VS EXTENDED')]");
            expect(await headingLocator.textContent()).toContain("REGULAR VS EXTENDED");
        });

        test("Footer Get A Quote link verify", async ({ page }) => {
            const linkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[3]/a[1]");
            await linkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://iqonic.tech/cost-calculator/";
            await CommonLinkVerify(page, linkLocator, expectedLink);
        });

        test("Footer License link verify", async ({ page }) => {
            const linkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[4]/a[1]");
            await linkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://iqonic.design/licensing-terms-more/";
            await CommonLinkVerify(page, linkLocator, expectedLink);
        });

        test("Footer Hire Us link verify", async ({ page }) => {
            const linkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[5]/a[1]");
            await linkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://iqonic.tech/";
            await CommonLinkVerify(page, linkLocator, expectedLink);
        });

        test("Footer Iqonic Design copyright link verify", async ({ page }) => {
            const linkLocator = page.locator("//a[contains(text(),'Iqonic Design.')]");
            await linkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://iqonic.design/";
            await CommonLinkVerify(page, linkLocator, expectedLink);
        });
    });

    test.describe('Footer Social Media Links', () => {
        const verifySocialLink = async (page, locator, expectedLink) => {
            const socialLinkLocator = page.locator(locator);
            await socialLinkLocator.scrollIntoViewIfNeeded();
            await CommonLinkVerify(page, socialLinkLocator, expectedLink);
        };

        test("Facebook link verify", async ({ page }) => {
            await verifySocialLink(page, "//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[1]/a[1]/i[1]", "https://www.facebook.com/iqonicdesign");
        });

        test("YouTube link verify", async ({ page }) => {
            await verifySocialLink(page, "//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[2]/a[1]/i[1]", "https://www.youtube.com/c/IqonicDesign");
        });

        test("X Twitter link verify", async ({ page }) => {
            await verifySocialLink(page, "//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[3]/a[1]/i[1]", "https://x.com/iqonicdesign");
        });

        test("Instagram link verify", async ({ page }) => {
            await page.waitForTimeout(2000)
            await verifySocialLink(page, "//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[4]/a[1]", "https://www.instagram.com/iqonicdesign/");
        });
    });

    test.describe('Footer Logo Verification', () => {
        test("Frezka Logo link verify (Footer)", async ({ page }) => {
            const logoLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
            await logoLinkLocator.scrollIntoViewIfNeeded();
            await logoLinkLocator.click();
            expect(page.url()).toBe(home_url);
        });
    });
});