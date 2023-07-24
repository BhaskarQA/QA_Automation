import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I launch the talentship io portal', () => {
    cy.visit('https://www.talentship.io')
    cy.wait(4000)
    cy.get('#CookieBoxSaveButton').click()
    cy.wait(5000)
    cy.url().should('contains', 'https://www.talentship.io')
})

When('I click on careers', () => {
    cy.wait(5000)
    cy.get('ul#menu-main-menu>li:nth-child(5)>a').click({ force: true })
    cy.url().should('eq', 'https://careers.talentship.io/')
})

Given('I launch talentshipio dev portal', () => {
    cy.visit('https://dev-careers.talentship.io/')
})

And('I select the Location', () => {
    cy.get('.MuiFormControl-root>div').click()
    cy.get('.MuiList-root > .Mui-selected').click()
    cy.get('.MuiList-root > .Mui-selected').should('have.text', 'All Location')
})

Then('I verify the Current Job openings title', () => {
    cy.get('span[class="text"]').should('have.text', 'Current Job Openings')
})

And('I verify the talentship logo', () => {
    cy.get('.logo-wrapper>a>img').should('be.visible')
})

And('I can verify the departments and positions', () => {

    cy.get('.image>img').eq(0).should('be.visible')
    cy.get('.profile-h2').eq(0).contains('Full Stack Developer')
    cy.get('.profile-par').eq(0).contains('DEVELOPMENT')
    cy.get('.profile-h2>span').eq(0).contains('5+ years')

    cy.get('.image>img').eq(1).should('be.visible')
    cy.get('.profile-h2').eq(1).contains('Frontend')
    cy.get('.profile-par').eq(1).contains('DEVELOPMENT')
    cy.get('.profile-h2>span').eq(1).contains('5+ years')

    cy.get('.image>img').eq(2).should('be.visible')
    cy.get('.profile-h2').eq(2).contains('Senior DevOps Engineer')
    cy.get('.profile-par').eq(2).contains('CLOUD INFRASTRUCTURE')
    cy.get('.profile-h2>span').eq(2).contains('8+ years')

    cy.get('.image>img').eq(3).should('be.visible')
    cy.get('.profile-h2').eq(3).contains('Site Reliability Engineer')
    cy.get('.profile-par').eq(3).contains('CLOUD INFRASTRUCTURE')
    cy.get('.profile-h2>span').eq(3).contains('6+ years')

    cy.get('.image>img').eq(4).should('be.visible')
    cy.get('.profile-h2').eq(4).contains('Cloud Database Administrator')
    cy.get('.profile-par').eq(4).contains('CLOUD INFRASTRUCTURE')
    cy.get('.profile-h2>span').eq(4).contains('5+ years')

})

And('I can verify the hr email id', () => {
    cy.get('.cen>a').should('have.text', 'hellohr@talentship.io')
})

When('I click on show details', () => {
    cy.get('.profile-details>button').eq(0).contains('Show Details').click()
})

Then('I can validate the headers', () => {
    cy.get('h3').eq(1).contains('Role')
    cy.get('h3').eq(2).contains('About Us')
    cy.get('h3').eq(3).contains('Job Description')
    cy.get('h3').eq(4).contains('Role and Responsibilities')
    cy.get('h3').eq(5).contains('Required Technical and Professional Expertise')
    cy.get('h3').eq(6).contains('Good to Have')
})

When('I click on Apply Now', () => {
    cy.get('.Pdf-buttom').contains('Apply Now').click()
})

And('I update submit your application details', (dataTable) => {

    cy.get('#firstName').type(dataTable.rawTable[1][0])
    cy.get('#lastName').type(dataTable.rawTable[1][1])
    cy.get('#mobile').type(dataTable.rawTable[1][2])
    cy.get('#Email').type(dataTable.rawTable[1][3])
})

// And('I click on robo check box', () => {
//     cy.get('[role="checkbox"]').click({force: true})
// })

// And('I click submit button', () => {
//     cy.get('[type="button"]').eq(0).should('be.visible').click()

// })