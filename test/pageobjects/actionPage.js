const Page = require("../pageobjects/page.js")
const axios = require("axios");


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

    async findByXpath(xpath) {
        await driver.findElement(By.xpath(xpath)).click()
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


    async findCurrentUrl(xpath) {
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