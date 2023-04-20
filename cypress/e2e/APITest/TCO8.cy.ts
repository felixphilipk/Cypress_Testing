import UserCreation from "../../support/pageObjects/APITest/UserCreation"


describe("TC08", () => {
    const usercreation = new UserCreation()
    const username = usercreation.username
    const password = usercreation.password
    const access_Token = " "
    const userId = " "
    const isbn = " "
    const isbn1 = " "
    const isbn2 = " "
    const isbn3 = " "

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
                userId = response.body.userID
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


    it("Get ISBN number for books", () => {


        cy.get('@API').then(API => {
            cy.request({
                method: 'GET',
                url: API.EndpointBooks + API.getBooks,
                headers: {
                    "Authorization": access_Token,
                    "Content-Type": "application/json"
                }

            }).as("responseBody")
            cy.get("@responseBody").should((response) => {
                expect(response.status).to.eq(200)
                isbn = response.body.books[1].isbn
                isbn2 = response.body.books[2].isbn
                isbn3 = response.body.books[3].isbn
                expect(response.body.books[3].isbn).to.be.a("string")
                expect(response.body.books[3].title).to.be.a("string")
                expect(response.body.books[3].subTitle).to.be.a("string")
                expect(response.body.books[3].author).to.be.a("string")
                expect(response.body.books[3].publish_date).to.be.a("string")
                expect(response.body.books[3].publisher).to.be.a("string")
                expect(response.body.books[3].pages).to.be.a("number")
                expect(response.body.books[3].website).to.be.a("string")
            })
        })
    })







    it("Add Book List for created User", () => {


        cy.get('@API').then(API => {
            cy.request({
                method: 'POST',
                url: API.EndpointBooks + API.getBooks,
                headers: {
                    "Authorization": "Bearer" + " " + access_Token,
                    "Content-Type": "application/json"
                },
                body: {

                    "userId": userId,
                    "collectionOfIsbns": [
                        {
                            "isbn": isbn
                        },
                        {
                            "isbn": isbn2
                        },
                        {
                            "isbn": isbn3
                        }
                    ]


                }


            }).as("responseBody")
            cy.get("@responseBody").should((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.books[0].isbn).to.eql(isbn)
                expect(response.body.books[1].isbn).to.eql(isbn2)
                expect(response.body.books[2].isbn).to.eql(isbn3)

            })
        })
    })


    it("API Test: Remove One of the user added books", () => {

        cy.get('@API').then(API => {
            cy.request({
                method: 'DELETE',
                url: API.EndpointBooks + API.deleteBook,
                headers: {
                    "Authorization": "Bearer" + " " + access_Token,
                    "Content-Type": "application/json"
                },

                body: {

                    "isbn": isbn,
                    "userId": userId


                }


            }).as("responseBody")
            cy.get("@responseBody").should((response) => {
                expect(response.status).to.eq(204)


            })
        })



    })

    it("API Test: Remove A book which does not exist in users book list", () => {

        cy.get('@API').then(API => {
            cy.request({
                method: 'DELETE',
                url: API.EndpointBooks + API.deleteBook,
                failOnStatusCode: false,
                headers: {
                    "Authorization": "Bearer" + " " + access_Token,
                    "Content-Type": "application/json"
                },

                body: {

                    "isbn": isbn,
                    "userId": userId


                }


            }).as("responseBody")
            cy.get("@responseBody").should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.eq("ISBN supplied is not available in User's Collection!")


            })
        })



    })


})







