import {Given} from "cypress-cucumber-preprocessor/steps";

Given('navigate to channel page',()=>{
    cy.visit("/us");
})