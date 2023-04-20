class formsPage {

    leftNavBar(selector){
        cy.contains('li', selector).click();
      }



      fillPractiseForm(firstNameValue:string,lastNameValue:string,emailValue,genderValue:number,mobileNumberValue:string,day:string,month:string,year:string,firstcharofsearch:string,subjectselect:string,hobiesValue:number,pictureValue:string,AddressValue:string,state:number,city:number){

        cy.get("#firstName").type(firstNameValue)
        cy.get('#lastName').type(lastNameValue)
        cy.get('#userEmail').type(emailValue)
        cy.get(`[for='gender-radio-${genderValue}']`).click()
        cy.get('#userNumber').type(mobileNumberValue)
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').select(`${month}`, {'force': true});
        cy.get('.react-datepicker__year-select').select(`${year}`, {'force': true});
        cy.get(`.react-datepicker__day--0${day}`).click()
        cy.get('.subjects-auto-complete__value-container').type(`${firstcharofsearch}`)
        cy.contains(`${subjectselect}`).click()
        cy.get(`#hobbiesWrapper > .col-md-9 > :nth-child(${hobiesValue})`).click()
        cy.get('#uploadPicture').click().selectFile(`${pictureValue}`)
        cy.get('#currentAddress').type(AddressValue)
        cy.contains('Select State').click()
        cy.wait(3000)
        cy.get(`#react-select-3-option-${state}`)
        .click({ force: true }); 
        cy.contains('Select City').click()
        cy.get(`#react-select-4-option-${city}`).click({force:true})
        cy.get('#submit').click()
      }


      validatePractiseForm(){

        return cy.get('#example-modal-sizes-title-lg')
      }

      ValidateParctiseFormFields(firstNameValue:string,lastNameValue:string,emailValue,mobileNumberValue:string,day:string,month:string,year:string,firstcharofsearch:string,subjectselect:string,hobiesValue:number,pictureValue:string,AddressValue:string,state:number,city:number){

        cy.get('tbody > :nth-child(1) > :nth-child(2)').should(($element) => { expect($element.text()).to.equal(firstNameValue+" "+lastNameValue)})
      cy.get('tbody > :nth-child(2) > :nth-child(2)').should(($element) => { expect($element.text()).to.equal(emailValue)})
      cy.get('tbody > :nth-child(3) > :nth-child(2)').should(($element) => {expect($element.text()).to.be.a('string')});
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should(($element) => { expect($element.text()).to.equal(mobileNumberValue)})
        cy.get('tbody > :nth-child(5) > :nth-child(2)').should(($element) => { expect($element.text()).to.equal(day+" "+month+","+year)})
        cy.get('tbody > :nth-child(6) > :nth-child(2)').should(($element) => { expect($element.text()).to.equal(subjectselect)})
        cy.get('tbody > :nth-child(7) > :nth-child(2)').should(($element) => {expect($element.text()).to.be.a('string')});
        cy.get('tbody > :nth-child(8) > :nth-child(2)').should(($element) => { expect($element.text()).to.be.a('string')});
        cy.get('tbody > :nth-child(9) > :nth-child(2)').should(($element) => { expect($element.text()).to.equal(AddressValue)})
        cy.get('tbody > :nth-child(10) > :nth-child(2)').should(($element) => {expect($element.text()).to.be.a('string')});

      }
      


}

export default formsPage