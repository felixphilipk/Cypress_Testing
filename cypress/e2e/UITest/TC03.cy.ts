import homePage from "../../support/pageObjects/HomePage/homePage"

import formsPage from "../../support/pageObjects/FormsPage/formsPage"

describe("TC03",()=>{
    const homepage = new homePage()
    const formspage = new formsPage()
    beforeEach(() => {
        // Load values from the fixture
        cy.fixture('formsData.json').as('formData');
      });
it("Verify User Can Submit Form",()=>{

    cy.visit('/')
    homepage.FormsTab.click()
    formspage.leftNavBar('Practice Form')
    cy.get('@formData').then(formData => {
    formspage.fillPractiseForm(formData.firstNameValue,formData.lastNameValue,formData.emailValue,formData.genderValue,formData.mobileNumberValue,formData.dateOfBirthDay,formData.dateOfBirthMonth,formData.dateOfBirthYear,"c","Computer Science",formData.hobbiesReading,formData.pictureValue,formData.AddressValue,formData.stateNCR,formData.cityDelhi)
    formspage.validatePractiseForm().should("have.text","Thanks for submitting the form")    
    formspage.ValidateParctiseFormFields(formData.firstNameValue,formData.lastNameValue,formData.emailValue,formData.mobileNumberValue,formData.dateOfBirthDay,formData.dateOfBirthMonth,formData.dateOfBirthYear,"c","Computer Science",formData.hobbiesReading,formData.pictureValue,formData.AddressValue,formData.stateNCR,formData.cityDelhi)
})

})



})