import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I can launch the investor url', () => {
    cy.visit('https://investorportal.qa.ace-alternatives.com')
})
When('I can login by using credentials', () => {
    cy.get('#username').type('max.mustermann')
    cy.get('#password').type('max.mustermann')
    cy.get('.app__button--success').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

})
And('I can verify the dashboard title timeline', () => {
    cy.wait(6000)
    cy.get('.cardHead>:nth-child(1)>.cardHeadLeft').should('have.text',' Timeline ')
   
})
And('I can able to choose and select the investor',()=> 
{
cy.wait(8000)
cy.get('').each(($e1,index,$list) =>
{
 if($e1.text()=="Peter Schwanitz") 
 {
    $e1.click()
 }
})
})

