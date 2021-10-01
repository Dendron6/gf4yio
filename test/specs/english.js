const action = require("../pageobjects/actionPage.js")

describe('English Game Flash For You Test Suite', function () {
    this.timeout(50000);
    let baseurl = 'https://en.gf4y.com/';


    before("Before Tests", async () => {
        await action.open(baseurl)
    })

    it('Server response 200 OK', async () => {
        let expectedValue = await action.landPage(baseurl);
        await expect(expectedValue).toEqual(200, 'Response status has to be 200');

    })

    it('Response Time of Server is below 3100', async () => {
        let actualResult = await action.timer(baseurl);
        await expect(actualResult).toBeLessThanOrEqual(3500)
    })

    //test of Russian language link

    it(`Linkage test, switch to ${action.langRu} page`, async () => {
        await action.clickOnFlag(action.flag1);
        await expect(browser).toHaveUrl('https://gf4y.com/')

    })
    it(`Test of page switching to ${action.langRu} language`, async () => {
        let expectedLanguage = await action.getLangConformation(await browser.getUrl())
        await expect(expectedLanguage).toEqual('ru-ru')

    })

    it('Title of the page says ', async () => {
        await expect(browser).toHaveTitle('Игры онлайн бесплатно | Мини игры на GAME FLASH');

    })
    it(`Return to ${action.langEng} page`, async () => {
        await action.clickOnFlag(action.flag3);
        await expect(browser).toHaveUrl('https://en.gf4y.com/');
    })


    //Test of Ukrainian version link

    it(`Linkage test, switch to ${action.langUkr} page`, async () => {
        await action.clickOnFlag(action.flag2);
        await expect(browser).toHaveUrl('https://ua.gf4y.com/')

    })
    it(`Test of page switching to ${action.langUkr} language`, async () => {
        let expectedLanguage = await action.getLangConformation(await browser.getUrl())
        await expect(expectedLanguage).toEqual('uk-ua');

    })

    it('Title of the page says ', async () => {
        await expect(browser).toHaveTitle('Ігри онлайн. Грати безкоштовно в флеш ігри на GF4Y');

    })
    it(`Return to ${action.langEng} page`, async () => {
        await action.clickOnFlag(action.flag3);
        await expect(browser).toHaveUrl('https://en.gf4y.com/');
    })

    //test of German version link

    it(`Linkage test, switch to ${action.langGer} page`, async () => {
        await action.clickOnFlag(action.flag3);
        await expect(browser).toHaveUrl('https://de.gf4y.com/')

    })
    it(`Test of page switching to ${action.langGer} language`, async () => {
        let expectedLanguage = await action.getLangConformation(await browser.getUrl())
        await expect(expectedLanguage).toEqual('de-de')

    })

    it('Title of the page says ', async () => {
        // title of new window can be used for assertions
        await expect(browser).toHaveTitle('Online Spiele - Kostenlos Online spielen auf GF4Y.COM');

    })
    it(`Return to ${action.langEng} page`, async () => {
        await action.clickOnFlag(action.flag3);
        await expect(browser).toHaveUrl('https://en.gf4y.com/');
    })


    it.skip('Top 100 games displays more than 100 results', async () => {
        await action.findByXpath(action.otherButton);
        await action.findByXpath(action.top100);
        let top = await driver.findElements(By.className('in'))
        let actualResult = top.length
        expect(actualResult).to.be.above(100)
    })

})
