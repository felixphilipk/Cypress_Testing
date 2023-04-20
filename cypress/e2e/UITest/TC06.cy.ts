import homePage from "../../support/pageObjects/HomePage/homePage"
import dropablePage from "../../support/pageObjects/InteractionsPage/DroppablePage"


describe("TC06",()=>{
    const homepage = new homePage()
    const dropablepage = new dropablePage()


it("Verify User Can Drag And Drop",()=>{
    cy.visit('/')
    homepage.InteractionsTab.click()
    dropablepage.leftNavBar('Droppable')
    dropablepage.dragAndDrop()
    dropablepage.dragAndDropValidation()



})



})