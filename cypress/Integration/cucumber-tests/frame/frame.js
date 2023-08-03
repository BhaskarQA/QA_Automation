import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'


Given('I launch investor portal', () => {
    cy.visit('https://investorportal.qa.ace-alternatives.com/')
})

When('I login by using username and password', (dataTable) => {

    cy.get('#username').type(dataTable.rawTable[1][0])
    cy.get('#password').type(dataTable.rawTable[1][1])
    cy.get('#kc-login').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
And('I click on 2bx banner', () => {
    cy.get('.youtube-banner-card>a').invoke('removeAttr', 'target').click()
    cy.wait(1000)
})

And('I click on apply in 2bx', () => {
    cy.origin("https://2bx.vc/)", () => {
        cy.get('.iubenda-cs-accept-btn').click()
        cy.get('.elementor-button-wrapper>a').eq(0).click()
    })
})
And('I back to investor url', () => {
  
    cy.origin("https://2bx.vc/)", () => {
        cy.go('back')
        cy.go('back')
    })
})

And('I click on reports section', () => {
    cy.wait(10000)
    cy.get('.mat-nav-list>div:nth-child(4)').click()
})

And('I download the reports', () => {
    cy.wait(10000)
    cy.get('[title="webviewer"]').its('0.contentDocument.body').then(cy.wrap).find('[aria-label="Download"]').click()
})
// Then('I verify the pdf', () => {
//     // cy.fixture('cypress/downloads/Quarterly_Report_Template_Data.pdf','binary').then((pdfData) => {
//     //     extractTextFromPDF(pdfData).then((extractedText) => {
//     //     expect(extractedText).to.contain('Capital Account Table');
//     // })
  
        
//     // })
//     const pdfFilePath = 'cypress/downloads/Quarterly_Report_Template_Data.pdf';
//   return extractTextFromPDF(pdfFilePath).then((extractedText) => {
//     // Use the extractedText as needed for validation or other purposes
//     this.extractedText = extractedText;

//     expect(this.extractedText).to.contain('Capital Account Table');
//   });
// });

