import homePage from "../../support/pageObjects/HomePage/homePage"
import elementsPage from "../../support/pageObjects/ElementsPage/elementsPage"
import webTables from "../../support/pageObjects/ElementsPage/webTables"




describe('TC01', () => {
  const homepage = new homePage()
  const elementspage = new elementsPage()
  const webtables = new webTables()



  it('Add User to the Webtable', () => {

    cy.visit('/')
    homepage.EventsTab.contains("Elements").click()
    elementspage.leftNavBar("Web Tables")
    webtables.ValidateRowBeforeData()
    webtables.addBtn.click()
    webtables.addData()
    webtables.submitBtn.click()
    webtables.ValidateRowAfterData()

  });


  it.only('Verify User Can Edit A Row In A Table',()=>{

    cy.visit('/')
    homepage.EventsTab.contains("Elements").click()
    elementspage.leftNavBar("Web Tables")
    webtables.nameEditRow(2,"Gerimedica","BV")
    webtables.validateNameAfterEdit(2,1,2,"Gerimedica","BV")
})

})
