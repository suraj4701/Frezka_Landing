const { expect } = require('@playwright/test');

const TrustpilotVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.trustpilot.com/review/iqonic.design");
    return newPage;
}

const EnvantoVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://codecanyon.net/user/iqonicdesign/portfolio");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'iqonicdesign - Portfolio')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('iqonicdesign - Portfolio');
    return newPage;
}

const UserappPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.frezka.customer");
    const iqonicDesignSpanLocator = newPage.locator("//span[@class='AfwdI']");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Frezka - Beauty Salons');
    return newPage;
}

const UserappAppstore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.apple.com/us/app/frezka-beauty-salons/id6450424262?platform=ipad");
    const iqonicDesignSpanLocator = newPage.locator("//h1[@class='product-header__title app-header__title']");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Frezka - Beauty Salons');
    return newPage;
}

const WebsiteVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/frezka/");
    return newPage;
}

const AdminPanelVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/frezka/admin/login");
    const iqonicDesignSpanLocator = newPage.locator("//button[normalize-space()='Log in']");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Log in');
    return newPage;
}

const EnvantoFrezkaVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Frezka - Spa & Salon Management Software (Flutter + Laravel)');
    return newPage;
}

const BookcallVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://frezka.iqonic.design/frezka-demo-call/");
    return newPage;
}

const BuyServiceVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/frezka-flutter-app-with-laravel-backend/");
    return newPage;
}

const CommonLinkVerify = async (page, locator, link) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe(link);
    return newPage;
}

module.exports = { TrustpilotVerify, EnvantoVerify, WebsiteVerify, UserappPlaystore, UserappAppstore, EnvantoFrezkaVerify, AdminPanelVerify, BookcallVerify, BuyServiceVerify, CommonLinkVerify };