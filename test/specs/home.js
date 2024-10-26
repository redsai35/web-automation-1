const homeScreen = require("../screenobjects/home.screen")
const webScreen = require("../screenobjects/web.screen")

describe('test', () => { 
    it('test', async() => { //method 1
        await browser.url("https://automationexercise.com/login")
        await homeScreen.insertCredentials("epultest@gmail.com", "test123")
        await homeScreen.submitBtn.click()
    })

    it('test', async() => { // method 2
        await browser.url("https://automationexercise.com/login")
        await browser.maximizeWindow()
        await web.$(webScreen.links.ctcUs).click()
        await webScreen.formSubmit('saiful', 'test@mail.com', 'testing', 'hadiencemkurus')
        await web.$(webScreen.buttons.saveBtn).click()
    })
})