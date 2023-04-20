import homePage from "../../support/pageObjects/HomePage/homePage"
import ToolTipPage from "../../support/pageObjects/WidgetsPage/ToolTipPage"




describe("TC05",()=>{
    const homepage = new homePage()
    const tooltipPage = new ToolTipPage()


    it("Verify the tooltip",()=>{

        cy.visit('/')
        homepage.WidgetsTab.click()
        tooltipPage.leftNavBar("Tool Tips")
        tooltipPage.hoverBtnValidation()


    })

})