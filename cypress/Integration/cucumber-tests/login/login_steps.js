import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I can launch the investor url', () => {
    cy.visit('https://investorportal.qa.ace-alternatives.com')
})
When('I can login by using credentials', () => {
    cy.get('#username').type('max.mustermann')
    cy.get('#password').type('max.mustermann')
    cy.get('#kc-login').click

})
And('I can select the investor', () => {
    cy.log('world')
})
And('I can click the insights', () => {
    cy.log('QA')
})
Then('I can validate the dashboard as expected', () => {
    cy.log('automation')
})