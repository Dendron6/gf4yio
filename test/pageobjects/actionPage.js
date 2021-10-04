const Page = require("../pageobjects/page.js")
const axios = require("axios");
//you can run test using npm run german/russian/ukrainian/english


class ActionPage extends Page {
    constructor() {
        super();
        this.langEng = "English";
        this.langRu = 'Russian';
        this.langUkr = 'Ukrainian';
        this.langGer = 'German';
        this.flag11 = '//header/div[1]/div[1]/ul[1]/li[1]/a[1]';
        this.flag22 = '//header/div[1]/div[1]/ul[1]/li[2]/a[1]';
        this.flag33 = '//header/div[1]/div[1]/ul[1]/li[3]/a[1]';
        this.top100 = '//header/div[1]/ul[1]/li[6]/ul[1]/li[1]/a[1]';
        this.otherButton = "//header/div[1]/ul[1]/li[6]/a[1]";
    }

    get flag1() {
        return $(this.flag11)
    }

    get flag2() {
        return $(this.flag22)
    }

    get flag3() {
        return $(this.flag33)
    }
    get otherBtn() {
        return $(this.otherButton)
    }
    get topBtn() {
        return $(this.top100)
    }
    //this will create list of all the games in the class 'in'
    get listGames(){
        return $$('.in')
    }

    async clickTop100() {
        await this.otherBtn.click()
        await this.topBtn.click()
    }

    async timer(url) {
        let startTime = new Date().getTime();
        await axios.get(url);
        let endTime = new Date().getTime();
        return (endTime - startTime);
    }

    async landPage(url) {
        const response = await axios.get(url)
        return response.status;

    }


    async clickOnFlag(xpath) {
        await xpath.click()

    }

    async getLangConformation(x) {
        const response = await axios.get(x)
        return response.data.slice(27, 32)

    }

    open(path) {
        return super.open(path);
    }
}

module.exports = new ActionPage();