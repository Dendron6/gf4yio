const action = require("../pageobjects/actionPage.js")

describe('Ukrainian Game Flash For You Test Suite', function () {
    this.timeout(50000);
    let baseurl = 'https://ua.gf4y.com/';


    before("Before Tests", async () => {
        await action.open(baseurl)
    })

    it('Server response 200 OK', async () => {
        let expectedValue = await action.landPage(baseurl);
        await expect(expectedValue).toEqual(200);
    })

    it('Response Time of Server is below 3100', async () => {
        let actualResult = await action.timer(baseurl);
        await expect(actualResult).toBeLessThanOrEqual(3500)
    })

    //test of Russian language link

    it(`Linkage test, switch to ${action.langRu} page`, async () => {
        await action.clickOnFlag(action.flag1);
        await expect(browser).toHaveUrl('https://gf4y.com/');
    })

    it(`Switching to ${action.langRu} language`, async () => {
        let expectedLanguage = await action.getLangConformation(await browser.getUrl());
        await expect(expectedLanguage).toEqual('ru-ru');
    })

    it('Title of the page says ', async () => {
        await expect(browser).toHaveTitle('Игры онлайн бесплатно | Мини игры на GAME FLASH');
    })

    it(`Return to ${action.langUkr} page`, async () => {
        await action.clickOnFlag(action.flag1);
        await expect(browser).toHaveUrl('https://ua.gf4y.com/');
    })

    //Test of English version link

    it(`Linkage test, switch to ${action.langEng} page`, async () => {
        await action.clickOnFlag(action.flag3);
        await expect(browser).toHaveUrl('https://en.gf4y.com/')
    })

    it(`Test of page switching to ${action.langEng} language`, async () => {
        let expectedLanguage = await action.getLangConformation(await browser.getUrl())
        await expect(expectedLanguage).toEqual('en-gb')
    })

    it('Title of the page says ', async () => {
        await expect(browser).toHaveTitle('Online Games - Play Free Online Games on GF4Y.COM');
    })

    it(`Return to ${action.langUkr} page`, async () => {
        await action.clickOnFlag(action.flag2);
        await expect(browser).toHaveUrl('https://ua.gf4y.com/');
    })

    //test of German version link

    it(`Linkage test, switch to ${action.langGer} page`, async () => {
        action.clickOnFlag(action.flag2);
        await expect(browser).toHaveUrl('https://de.gf4y.com/')
    })

    it(`Switching to ${action.langGer} language`, async () => {
        let expectedLanguage = await action.getLangConformation(await browser.getUrl())
        await expect(expectedLanguage).toEqual('de-de')
    })

    it('Title of the page says ', async () => {
        await expect(browser).toHaveTitle('Online Spiele - Kostenlos Online spielen auf GF4Y.COM');
    })

    it(`Return to ${action.langUkr} page`, async () => {
        await action.clickOnFlag(action.flag2);
        await expect(browser).toHaveUrl('https://ua.gf4y.com/');
    })

    it('Top 100 games displays more than 100 results', async () => {
        await action.clickTop100()
        await expect(action.listGames).toBeElementsArrayOfSize({gte:100})
    })
})
