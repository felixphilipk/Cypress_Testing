import UserCreation from "../../support/pageObjects/APITest/UserCreation"


describe("TC07", () => {
    const usercreation = new UserCreation()
    const username = usercreation.username
    const password = usercreation.password
    const notRegisteredUser = usercreation.notRegisteredUsername
    const notRegisteredUserPassword = usercreation.notRegisteredUserPassword
    const access_Token = " "

    beforeEach(() => {
        // Load values from the fixture
        cy.fixture('APITest.json').as('API');

    });

    it("API Test: Creation Of User", () => {


        cy.get('@API').then(API => {
            cy.request({
                method: 'POST',
                url: API.Endpoint + API.createNewUser,
                headers: {
                    "Content-Type": "application/json"
                },
                body: {

                    "userName": username,
                    "password": password
                }
            }).as("responseBody")
            cy.get("@responseBody").should((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.userID).to.be.a("string")
                expect(response.body.username).to.be.a('string')
                expect(response.body.books).to.be.a('array').that.is.empty;
            })
        })
    })

    it("API Test: GenerateToken for Created User", () => {
        cy.get('@API').then(API => {
            cy.request({
                method: 'POST',
                url: API.Endpoint + API.generateToken,
                headers: {
                    "Content-Type": "application/json"
                },
                body: {

                    "userName": username,
                    "password": password
                }
            }).as("responseBody")
            cy.get("@responseBody").should((response) => {
                expect(response.status).to.eq(200)
                access_Token = response.body.token
                expect(response.body.token).to.be.a("string")
                expect(response.body.expires).to.be.a("string")
                expect(response.body.status).to.be.eql("Success")
                expect(response.body.result).to.be.eql("User authorized successfully.")



            })
        })
    })



    it("API Test: Verify Whether User is authorized or not", () => {
        cy.get('@API').then(API => {
            cy.request({
                method: 'POST',
                url: API.Endpoint + API.authorizedUser,
                headers: {
                    "Content-Type": "application/json"
                },
                body: {

                    "userName": username,
                    "password": password
                }
            }).as("responseBody")
            cy.get("@responseBody").should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.eq(true)
            })
        })
    })


    it("API Test: GenerateToken for Non registered User", () => {
        cy.get('@API').then(API => {
            cy.request({
                method: 'POST',
                url: API.Endpoint + API.generateToken,
                headers: {
                    "Content-Type": "application/json"
                },
                body: {

                    "userName": notRegisteredUser,
                    "password": notRegisteredUserPassword
                }
            }).as("responseBody")
            cy.get("@responseBody").should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.token).to.be.a('null');
                expect(response.body.expires).to.be.a('null');
                expect(response.body.status).to.be.eql("Failed")
                expect(response.body.result).to.be.eql("User authorization failed.")



            })
        })
    })


    it("API Test: Check Non Registered User is Authorized", () => {
        cy.get('@API').then(API => {
            cy.request({
                method: 'POST',
                url: API.Endpoint + API.authorizedUser,
                failOnStatusCode: false,
                headers: {
                    "Content-Type": "application/json"
                },
                body: {

                    "userName": notRegisteredUser,
                    "password": notRegisteredUserPassword
                }
            }).as("responseBody")
            cy.get("@responseBody").should((response) => {
                expect(response.status).to.eq(404)
                expect(response.body.code).to.be.a("string")
                expect(response.body.message).to.be.eql("User not found!")
               



            })
        })
    })




})


  


    



