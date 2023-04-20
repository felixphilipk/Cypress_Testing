import { contains } from "cypress/types/jquery";
import { forEach, includes } from "cypress/types/lodash";

class webTables {


    get addBtn() {

        return cy.get('.col-md-7 #addNewRecordButton')

    }


    get submitBtn() {


        return cy.get('button#submit.btn.btn-primary')
    }
    // Function for adding data to Web table 
    addData() {
        const firstNameList = ['John', 'Jane', 'David', 'Siddharth', 'Michael', 'Emily', 'William', 'Olivia', 'James', 'Emma', 'Benjamin', 'Ava'];
        const lastNameList = ['Smith', 'Johnson', 'Brown', 'Choudhary', 'Miller', 'Davis', 'Anderson', 'Clark', 'Harris', 'Lewis', 'Mitchell', 'Young'];
        const industries = ['Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 'Manufacturing'];
        const department = `${industries[Math.floor(Math.random() * industries.length)]}`;
        // Generate random index for first name and last name lists
        const firstNameIndex = Math.floor(Math.random() * firstNameList.length);
        const lastNameIndex = Math.floor(Math.random() * lastNameList.length);
        // Generate random values for firstName, lastName, and email
        const firstName = firstNameList[firstNameIndex];
        const lastName = lastNameList[lastNameIndex];
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
        // Generate random value for age (between 18 and 65)
        const age = (Math.floor(Math.random() * (65 - 18 + 1)) + 18).toString();
        // Generate random value for salary (between 20000 and 1000000)
        const salary = Math.round(Math.random() * (1000000 - 20000) + 20000).toString();
        // Type the random values generated to the form 
        cy.get('[placeholder="First Name"]').type(firstName);
        cy.get('[placeholder="Last Name"]').type(lastName);
        cy.get('[placeholder="name@example.com"]').type(email);
        cy.get('[placeholder="Age"]').type(age);
        cy.get('[placeholder="Salary"]').type(salary);
        cy.get('[placeholder="Department"]').type(department);
    };



    ValidateRowBeforeData() {


        cy.get('.rt-tr-group:nth-child(4) .rt-td:nth-child(1)').should("not.include.text")

    }


    ValidateRowAfterData() {

        const names = ['John', 'Jane', 'David', 'Siddharth', 'Michael', 'Emily', 'William', 'Olivia', 'James', 'Emma', 'Benjamin', 'Ava'];

        cy.get('.rt-tr-group:nth-child(4) .rt-td:nth-child(1)').should(($element) => {
            const text = $element.text();
            expect(names.some(name => text.includes(name))).to.be.true;
        });
    }


    nameEditRow(row,firstname,secondname){
        cy.get(`.action-buttons [id=edit-record-${row}]`).click()
        cy.get('[placeholder="First Name"]').clear();
        cy.get('[placeholder="Last Name"]').clear();
        cy.get('[placeholder="First Name"]').type(firstname)
        cy.get('[placeholder="Last Name"]').type(secondname)
        cy.get('button#submit.btn.btn-primary').click()

    }


    validateNameAfterEdit(row: number, columnNumber: number, columnNumber1: number, firstnameValue: string, lastnameValue: string) {
        cy.get(`.rt-tr-group:nth-child(${row}) .rt-td:nth-child(${columnNumber})`).should('have.text', firstnameValue)
        cy.get(`.rt-tr-group:nth-child(${row}) .rt-td:nth-child(${columnNumber1})`).should('have.text', lastnameValue)

    }


}








export default webTables