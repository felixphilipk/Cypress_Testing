import homePage from "../../support/pageObjects/HomePage/homePage"
import elementsPage from "../../support/pageObjects/ElementsPage/elementsPage"



describe('TC02', () => {
    const homepage = new homePage()
    const elementspage = new elementsPage()
    

    it("Verify Broken Images", () => {

        cy.visit("/")
        homepage.EventsTab.contains("Elements").click()
        elementspage.leftNavBar("Broken Links - Images")
        cy.checkImage('[src="/images/Toolsqa_1.jpg"]')
          
          
  });

  
})


      



