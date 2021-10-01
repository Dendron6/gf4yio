const action = require("../pageobjects/actionPage.js")
const axios = require("axios");

describe('German Game Flash For You Test Suite', function () {
    this.timeout(50000);
    let baseurl = 'https://de.gf4y.com/';

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
        await action.findCurrentUrl(action.flag2);
        global.expectedUrlA = await browser.getUrl()
        expect(expectedUrlA).toHaveValue('https://ua.gf4y.com', `This is URL of ${action.langUkr} page`)


    })
    it.only(`Switching to ${action.langUkr} language`, async () => {
        let expectedLanguage = await action.getLangConformation(await browser.getUrl())
        await expect(expectedLanguage).toHaveValue('uk-ua', `Language is ${action.langUkr}`)
        console.log("await expectedLanguage")
    })

    it('Title of the page says ', async () => {
        expect(await driver.getTitle()).toHaveValue('Ігри онлайн. Грати безкоштовно в флеш ігри на GF4Y');

    })
    it.skip(`Return to ${action.langGer} page`, async () => {
        let engUrl = await action.findCurrentUrl(action.flag2);
        expect(engUrl).toHaveValue('https://de.gf4y.com/', `This is URL of ${action.langGer} page`);
    })


    //Test of English version link

    it.skip(`Linkage test, switch to ${action.langEng} page`, async () => {
        global.expectedUrlB = await action.findCurrentUrl(action.flag3);
        expect(expectedUrlB).toHaveValue('https://en.gf4y.com/', `This is URL of ${action.langEng} page`)

    })
    it.skip(`Test of page switching to ${action.langEng} language`, async () => {
        let expectedLanguage = await action.getLangConformation(expectedUrlB)
        await expect(expectedLanguage).to.be.equal('en-gb', `Language is ${action.langEng}`)

    })

    it.skip('Title of the page says ', async () => {
        expect(await driver.getTitle()).toHaveValue('Online Games - Play Free Online Games on GF4Y.COM');

    })
    it.skip(`Return to ${action.langGer} page`, async () => {
        let engUrl = await action.findCurrentUrl(action.flag3);
        expect(engUrl).toHaveValue('https://de.gf4y.com/', `This is URL of ${action.langGer} page`);
    })

    //test of Russian version link

    it.skip(`Linkage test, switch to ${action.langRu} page`, async () => {
        global.expectedUrlC = await action.findCurrentUrl(action.flag1);
        expect(expectedUrlC).toHaveValue('https://gf4y.com/', `This is URL of ${action.langRu} page`)

    })
    it.skip(`Switching to ${action.langGer} language`, async () => {
        let expectedLanguage = await action.getLangConformation(expectedUrlC)
        await expect(expectedLanguage).to.be.equal('ru-ru', `Language is ${action.langRu}`)

    })

    it.skip('Title of the page says ', async () => {
        // title of new window can be used for assertions
        let title = await driver.getTitle();
        expect(title).to.be.equal('Игры онлайн бесплатно | Мини игры на GAME FLASH');

    })
    it.skip(`Return to ${action.langGer} page`, async () => {
        let engUrl = await action.findCurrentUrl(action.flag2);
        expect(engUrl).to.be.equal('https://de.gf4y.com/', `This is URL of ${action.langGer} page`);
    })


    it.skip('Top 100 games displays more than 100 results', async () => {
        await action.findByXpath(action.otherButton);
        await action.findByXpath(action.top100);
        let top = await driver.findElements(By.className('in'))
        let actualResult = top.length
        expect(actualResult).to.be.above(100)
    })

})


