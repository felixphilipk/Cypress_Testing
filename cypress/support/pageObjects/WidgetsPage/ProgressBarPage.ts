class progressBarPage {


    leftNavBar(selector){
        cy.contains('li', selector).click();
      }
      



startFullProgressBar(){
    cy.get('#startStopButton').click()
    cy.wait(15000)
    cy.get('.progress-bar')

}

validateFullProgressBar(){
    cy.get('.progress-bar').should(($element) => {
        const progressText = $element.text();
        // Assert that the text content is equal to "100%"
        expect(progressText).to.equal('100%');

})

}

    startHalfProgressBar() {
        cy.get('#startStopButton').click()

        cy.get('.progress-bar').then(($element) => {
            cy.wrap($element).invoke('text').should('eq', '50%');
        })


}

    validateHalfProgressBar() {
        cy.get('#startStopButton').click();
        cy.get('.progress-bar').then(($element) => {
            cy.wrap($element).invoke('text').should('eq', '50%');
            // Click on the Stop button
            cy.get('#startStopButton').click();

        })
    }

ResetButtonValidation(){

    cy.get('#startStopButton').click();
    cy.wait(15000)
    cy.get('#resetButton').click()
    cy.get('#progressBar').should(($element) => {
        const progressText = $element.text();
     
        expect(progressText).to.equal('0%');
})
}

}


export default progressBarPage