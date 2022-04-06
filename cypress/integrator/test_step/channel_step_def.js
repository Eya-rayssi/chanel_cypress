import { When, Then } from 'cypress-cucumber-preprocessor/steps'


When("search for {string}",(data)=>{
    cy.searchForMsg();
});
Then("assert search {string}",(data)=>{
    cy.assertSearch(dataFileContent[data]);
})