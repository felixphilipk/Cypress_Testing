# Cypress Automation Framework By Felix

## Setup
1. Type the below Command to finish setting up the prequisites 

```
npm install

```

2. Once the Depencies such as cypress and typescript is installed type the below mentioned commands to run the test

```
npx  cypress open

```

or to run in non gui type the below mentioned command

```
npx cypress run

```

## Framework Explaination

- All the test are situated in the e2e folder 
1. The APITest are contained in the API folder
2. The UITest are contained in the UITest folder
- Fixture folder contain all the test data used in the test
- The support folder contains the webelements and custom functions used in thee test these are exported and imported inside the test for easier maintainability 
- ALL the cypress custom configurations are defined in the cypress.config.ts
- All the installed dependencies are defined in the package.json
- Custom commands have in command.ts file located on the support folder
- tsconfig.json and global.d.ts handle dependcies for typescript in cypress


## TestCases
1. Inside the UITest Folder the TestCase Suite no TC01 contain test scenarios for Adding a user to the Webtable and test scenario to Verify whether User Can Edit A Row In A Table both of this test occur in the elements page and the test data and support files for page objects belong to the elementsPage
2. Inside the UITest Folder the TestCase Suite  no TC02 contains scenario to verify whether the a broken image is present in the Elements page the verification of the broken image is done via a custom command and this test case actually fails since a broken image is detected
3. Inside the UITest Folder the TestCase Suite no TCO3 contains scenario to Verify whether User Can Submit a Form. Custom functions with parameters have been used from the Forms page located in page objects folder inside the support folder for form submission and validation
4. Inside the UITest Folder the TestCase Suite no TC04 contains test scenario to validate progress bar scenarios such as whether bar reaches 100% ,50% and reseting the progress bar have been done 
5. Inside the UITest Folder the TestCase Suite no TC05 contains test scenarios  for validating the tool tip messgae when hovered 
6. Inside the UITest Folder the TestCase Suite no TC06 contains test scenario for validation of  Drag And Drop functionality on the Interactions page 
7. Inside the APITest Folder the TestCase Suite no TC07 contains test scenario for validating the Creation Of User,GenerateToken for Created User,Verify Whether User is authorized or not,GenerateToken for Non registered User and validate it with assertion from chaijs
8. Inside the APITest Folder the TestCase Suite no TC08 contains test scenario to validate the following creation of user for token genration and using the bearer token to get the isbn id then using the isbn ids for adding a list of books and finally deleting one of the book added by the user and as a negative scenario deleting a book which does not exist in the users book collection list to get a bad request and validate the same  



