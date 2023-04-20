class elementsPage{


    leftNavBar(selector){
        cy.contains('li', selector).click();
      }
      



}

export default elementsPage