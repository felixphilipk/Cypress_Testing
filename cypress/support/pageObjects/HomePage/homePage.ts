class homePage{


    get EventsTab(){
  
        return cy.get(':nth-child(1) > :nth-child(1) > .card-body')
    }
    
    
    get FormsTab(){

        return cy.get(':nth-child(2) > :nth-child(1) > .card-body')
    }


    get WidgetsTab(){

        return cy.get(':nth-child(4) > :nth-child(1) > .card-body')
    }


    get InteractionsTab(){

        return cy.get(':nth-child(5) > :nth-child(1) > .card-body')
    }


}



export default homePage