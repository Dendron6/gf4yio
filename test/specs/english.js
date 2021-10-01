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
        await expect(actualResult).toBeLessThanOrEqual( 3500)
    })

    //test of Russian language link

    it(`Linkage test, switch to ${action.langRu} page`, async () => {
        await action.findCurrentUrl(action.flag1);
        global.expectedUrlRu = await browser.getUrl()
        expect(expectedUrlRu).toHaveValue('https://gf4y.com/', `This is URL of ${action.langRu} page`)

    })
    it(`Test of page switching to ${action.langRu} language`, async () => {
        let expectedLanguage = await action.getLangConformation(expectedUrlRu)
        await expect(expectedLanguage).to.be.equal('ru-ru', `Language is ${action.langRu}`)

    })

    it('Title of the page says ', async () => {
        expect(await driver.getTitle()).toHaveValue('Игры онлайн бесплатно | Мини игры на GAME FLASH');

    })
    it(`Return to ${action.langEng} page`, async () => {
        let engUrl = await action.findCurrentUrl(action.flag3);
        expect(engUrl).to.be.equal('https://en.gf4y.com/', `This is URL of ${action.langEng} page`);
    })


    //Test of Ukrainian version link

    it(`Linkage test, switch to ${action.langUkr} page`, async () => {
        global.expectedUrlukr = await action.findCurrentUrl(action.flag2);
        expect(expectedUrlukr).to.be.equal('https://ua.gf4y.com/', `This is URL of ${action.langUkr} page`)

    })
    it(`Test of page switching to ${action.langUkr} language`, async () => {
        let expectedLanguage = await action.getLangConformation(expectedUrlukr)
        await expect(expectedLanguage).to.be.equal('uk-ua', `Language is ${action.langUkr}`)

    })

    it('Title of the page says ', async () => {
        // title of new window can be used for assertions
        let title = await driver.getTitle();
        expect(title).to.be.equal('Ігри онлайн. Грати безкоштовно в флеш ігри на GF4Y');

    })
    it(`Return to ${action.langEng} page`, async () => {
        let engUrl = await action.findCurrentUrl(action.flag3);
        expect(engUrl).to.be.equal('https://en.gf4y.com/', `This is URL of ${action.langEng} page`);
    })

    //test of German version link

    it(`Linkage test, switch to ${action.langGer} page`, async () => {
        global.expectedUrlGer = await action.findCurrentUrl(action.flag3);
        expect(expectedUrlGer).to.be.equal('https://de.gf4y.com/', `This is URL of ${action.langGer} page`)

    })
    it(`Test of page switching to ${action.langGer} language`, async () => {
        let expectedLanguage = await action.getLangConformation(expectedUrlGer)
        await expect(expectedLanguage).to.be.equal('de-de', `Language is ${action.langGer}`)

    })

    it('Title of the page says ', async () => {
        // title of new window can be used for assertions
        let title = await driver.getTitle();
        expect(title).to.be.equal('Online Spiele - Kostenlos Online spielen auf GF4Y.COM');

    })
    it(`Return to ${action.langEng} page`, async () => {
        let engUrl = await action.findCurrentUrl(action.flag3);
        expect(engUrl).to.be.equal('https://en.gf4y.com/', `This is URL of ${action.langEng} page`);
    })


    it('Top 100 games displays more than 100 results', async () => {
        await action.findByXpath(action.otherButton);
        await action.findByXpath(action.top100);
        let top = await driver.findElements(By.className('in'))
        let actualResult = top.length
        expect(actualResult).to.be.above(100)
    })

})
