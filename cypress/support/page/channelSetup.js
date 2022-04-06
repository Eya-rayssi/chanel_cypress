const elements = require("../../locators/locators.js");
const utils = require("../../support/utils.js");


Cypress.Commands.add("searchForMsg",(data)=>{
    cy.xpath(elements.HOME_PAGE.SEARCH_BTN_HEADER).click();
    cy.xpath(elements.SEARCH_PAGE.SEARCH_INPUT).type(data.message).then(()=>{
        cy.xpath(elements.SEARCH_PAGE.SEARCH_BTN).click();
    })
});

Cypress.Commands.add("assertSearch",(data)=>{
    cy.xpath(elements.SEARCH_PAGE.RESULT_OF_SEARCH).click();
    cy.xpath(elements.SEARCH_PAGE.ASSERTION_MESSAGE).contains(data.content);
});