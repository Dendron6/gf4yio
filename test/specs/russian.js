const action = require("../pageobjects/actionPage.js")
const assert = require("assert");

describe('Russian Game Flash For You Test Suite', function () {
    this.timeout(50000);
    let baseurl = 'https://gf4y.com/';


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

    //test of Ukrainian language link

    it(`Linkage test, switch to ${action.langUkr} page`, async () => {
        await action.findCurrentUrl(action.flag1);
        global.expectedUrl1 = await browser.getUrl();
        expect(expectedUrl1).toHaveValue('https://ua.gf4y.com/', `This is URL of ${action.langUkr} page`)

    })
    it(`Switching to ${action.langUkr} language`, async () => {
        let expectedLanguage = await action.getLangConformation(expectedUrl1)
        await expect(expectedLanguage).to.be.equal('uk-ua', `Language is ${action.langUkr}`)

    })

    it('Title of the page says ', async () => {
        expect(await driver.getTitle()).toHaveValue('Ігри онлайн. Грати безкоштовно в флеш ігри на GF4Y');

    })
    it(`Return to ${action.langRu} page`, async () => {
        let engUrl = await action.findCurrentUrl(action.flag1);
        expect(engUrl).to.be.equal('https://gf4y.com/', `This is URL of ${action.langRu} page`);
    })


    //Test of English version link

    it(`Linkage test, switch to ${action.langEng} page`, async () => {
        global.expectedUrl2 = await action.findCurrentUrl(action.flag3);
        expect(expectedUrl2).to.be.equal('https://en.gf4y.com/', `This is URL of ${action.langEng} page`)

    })
    it(`Test of page switching to ${action.langEng} language`, async () => {
        let expectedLanguage = await action.getLangConformation(expectedUrl2)
        await expect(expectedLanguage).to.be.equal('en-gb', `Language is ${action.langEng}`)

    })

    it('Title of the page says ', async () => {
        // title of new window can be used for assertions
        let title = await driver.getTitle();
        expect(title).to.be.equal('Online Games - Play Free Online Games on GF4Y.COM');

    })
    it(`Return to ${action.langRu} page`, async () => {
        let engUrl = await action.findCurrentUrl(action.flag1);
        expect(engUrl).to.be.equal('https://gf4y.com/', `This is URL of ${action.langRu} page`);
    })

    //test of German version link

    it(`Linkage test, switch to ${action.langGer} page`, async () => {
        global.expectedUrl3 = await action.findCurrentUrl(action.flag2);
        expect(expectedUrl3).to.be.equal('https://de.gf4y.com/', `This is URL of ${action.langGer} page`)

    })
    it(`Switching to ${action.langGer} language`, async () => {
        let expectedLanguage = await action.getLangConformation(expectedUrl3)
        await expect(expectedLanguage).to.be.equal('de-de', `Language is ${action.langGer}`)

    })

    it('Title of the page says ', async () => {
        // title of new window can be used for assertions
        let title = await driver.getTitle();
        expect(title).to.be.equal('Online Spiele - Kostenlos Online spielen auf GF4Y.COM');

    })
    it(`Return to ${action.langRu} page`, async () => {
        let engUrl = await action.findCurrentUrl(action.flag1);
        expect(engUrl).to.be.equal('https://gf4y.com/', `This is URL of ${action.langRu} page`);
    })


    it('Top 100 games displays more than 100 results', async () => {
        await action.findByXpath(action.otherButton);
        await action.findByXpath(action.top100);
        let top = await driver.findElements(By.className('in'))
        let actualResult = top.length
        expect(actualResult).to.be.above(100)
    })

})
