class toolTipPage {

    leftNavBar(selector){
        cy.contains('li', selector).click();
      }



      hoverBtnValidation(){

        cy.get('#toolTipButton').trigger('mouseover');

          // Assert that the tooltip is visible
          cy.get('.tooltip').should('be.visible');

          // Optionally, you can also assert the text content of the tooltip
          cy.get('.tooltip').should('contain.text', 'You hovered over the Button');
      }
      

}



export default toolTipPage