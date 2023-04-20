import homePage from "../../support/pageObjects/HomePage/homePage"
import progressBarPage from "../../support/pageObjects/WidgetsPage/ProgressBarPage"

describe("TC04",()=>{
    const homepage = new homePage()
    const progressbarpage = new progressBarPage()

    beforeEach(() => {
        cy.visit('/')
    })



it("Validate Progress Bar", ()=>{
   

homepage.WidgetsTab.click()
progressbarpage.leftNavBar('Progress Bar')
progressbarpage.startFullProgressBar()
progressbarpage.validateFullProgressBar()

})

it("Validate Half Progress Bar",()=>{
    homepage.WidgetsTab.click()
    progressbarpage.leftNavBar('Progress Bar')
    progressbarpage.startHalfProgressBar()
    progressbarpage.validateHalfProgressBar()
})

it("Validate Reset Button",()=>{
    homepage.WidgetsTab.click()
    progressbarpage.leftNavBar('Progress Bar')
    progressbarpage.ResetButtonValidation()
    

})

})
