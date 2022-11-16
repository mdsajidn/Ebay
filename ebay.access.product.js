describe("Ebay.com", function(){
    it("Access a product via catagory after applying multiple filters",async function(){
        await  browser.url("https://www.ebay.com/");
        await browser.maximizeWindow();
        await browser.pause(2000)
        const ele = await $('(//a[text()="Electronics"])[2]');
        await ele.moveTo();
        await browser.pause(2000)
        const cl = await $('//*[@id="mainContent"]/div[1]/ul/li[3]/div[2]/div[1]/nav[1]/ul/li[1]/a');
        await cl.click();
        await browser.pause(2000)
        const cl1 = await $('//a[text()="Cell Phones & Smartphones"]');
        await cl1.click();
        const seeAll = await $('//*[@id="mainContent"]/div[1]/section[1]/div[1]/div[2]/button');
        await seeAll.click();
        const screensize = await $('div[role="tablist"]>div:nth-child(8)');
        await screensize.scrollIntoView();
        await screensize.click();
        const sizecheckbox = await $('//input[@id="c3-subPanel-Screen%20Size_4.0%20-%204.4%20in_cbx"]');
        await sizecheckbox.click();
        const price = await $('div[role="tablist"]>div:nth-child(23)');
        await price.click();
        const cl7 = await $('div:nth-child(2) > div > input');
        await cl7.setValue('20');
        const cl8 = await $('div:nth-child(4) > div > input');
        await cl8.setValue('20');
        const loc = await $('div[role="tablist"]>div:nth-child(25)');
        await loc.click();
        const cl6 = await $('[aria-label="US Only"]');
        await cl6.click();
        const cl9 = await $('//*[@id="x-overlay__form"]/div[3]/div[2]/button');
        await cl9.click();
        const allfilter = await $('(//button[@class="x-flyout__button"])[1]');
        await allfilter.click();
        await browser.pause(2000);
        const listItems = await $$('ul[class="brm__list"]>li:nth-child(1)>div>div>ul>li');
        await expect(listItems).toBeElementsArrayOfSize(3);
        await browser.pause(5000);
   
    })
    it("Access a product via searching",async function(){
        await  browser.url("https://www.ebay.com/");
        await browser.maximizeWindow();
        await browser.pause(2000);
        const searchbox = await $('input[id = "gh-ac"]');
        await searchbox.setValue('MacBook');
        const searchbutton = await $('input[type="submit"]');
        await searchbutton.click();
        await expect(browser).toHaveTitleContaining('MacBook');
        const catagory = await $('[aria-label="Select a category for search"]');
        await catagory.click();
        const catagory1 = await $('//option[text() = "└ Computers/Tablets & Networking"]');
        await catagory1.click();
        await searchbutton.click();
        await expect(browser).toHaveTitleContaining('Computers');


    })
})

