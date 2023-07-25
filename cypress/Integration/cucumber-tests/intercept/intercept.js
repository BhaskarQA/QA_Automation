import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('I can launch the browser', () => {
    describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {

    cy.visit('https://investorportal.qa.ace-alternatives.com')
    cy.get('#username').type('max.mustermann')
    cy.get('#password').type('max.mustermann')
    cy.get('.app__button--success').click()
    cy.get('div[class="investorDropdown ng-star-inserted"]').click()
    cy.get('.mat-option-text').eq(3).should('contains', 'Test LP').click()
    cy.get('.dashBoardTitle>.mat-form-field').click()

cy.intercept({
    method: 'GET',
    url: 'https://investorportal.qa.ace-alternatives.com/lp/0409c59e-e368-497d-8c7e-e3084c996c07/vehicle/2801c07a-9b8e-4f17-aaae-cb50cf21c728/dashboard'
},

    {
        statusCode: 200,
        body: {
            "data": {
                "lps": [
                    {
                        "id": "0409c59e-e368-497d-8c7e-e3084c996c07",
                        "name": "Test LP",
                        "canAdministrate": true,
                        "vehicles": [
                            {
                                "id": "e782dafc-4fea-4365-b07c-12c2e7b05a61",
                                "privileges": [
                                    "viewDashboard",
                                    "viewInsights",
                                    "viewCapitalAccount",
                                    "viewReports",
                                    "viewDocuments",
                                    "viewAccount"
                                ]
                            },
                            {
                                "id": "2801c07a-9b8e-4f17-aaae-cb50cf21c728",
                                "privileges": [
                                    "viewDashboard",
                                    "viewInsights",
                                    "viewCapitalAccount",
                                    "viewReports",
                                    "viewDocuments",
                                    "viewAccount"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "1346a661-b30b-4c46-a4e3-952ef6e765e2",
                        "name": "demo LP",
                        "canAdministrate": true,
                        "vehicles": [
                            {
                                "id": "44f8d051-3379-46b8-8a10-4b26d459c09f",
                                "privileges": [
                                    "viewDashboard",
                                    "viewInsights",
                                    "viewCapitalAccount",
                                    "viewReports",
                                    "viewDocuments",
                                    "viewAccount"
                                ]
                            },
                            {
                                "id": "49b43e82-6b96-42d1-8510-014e364ce304",
                                "privileges": [
                                    "viewDashboard",
                                    "viewInsights",
                                    "viewCapitalAccount",
                                    "viewReports",
                                    "viewDocuments",
                                    "viewAccount"
                                ]
                            },
                            {
                                "id": "7ff9131f-81ce-4bb4-b17c-27337e86a87a",
                                "privileges": [
                                    "viewDashboard",
                                    "viewInsights",
                                    "viewCapitalAccount",
                                    "viewReports",
                                    "viewDocuments",
                                    "viewAccount"
                                ]
                            },
                            {
                                "id": "2ccb8516-2487-4372-9bcf-f609b9b11920",
                                "privileges": [
                                    "viewDashboard",
                                    "viewInsights",
                                    "viewCapitalAccount",
                                    "viewReports",
                                    "viewDocuments",
                                    "viewAccount"
                                ]
                            },
                            {
                                "id": "cddee0af-6759-44cd-a186-55a4b2baac33",
                                "privileges": [
                                    "viewDashboard",
                                    "viewInsights",
                                    "viewCapitalAccount",
                                    "viewReports",
                                    "viewDocuments",
                                    "viewAccount"
                                ]
                            },
                            {
                                "id": "c442bcd8-eb36-4c5a-869b-e9a5d62e3214",
                                "privileges": [
                                    "viewDashboard",
                                    "viewInsights",
                                    "viewCapitalAccount",
                                    "viewReports",
                                    "viewDocuments",
                                    "viewAccount"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "de227e1c-d729-4486-a547-f6e84c13e0e7",
                        "name": "Peter Schwanitz",
                        "canAdministrate": true,
                        "vehicles": [
                            {
                                "id": "bfe3ab72-4b05-48f8-b60b-7edc3ed4ee55",
                                "privileges": [
                                    "viewDashboard",
                                    "viewInsights",
                                    "viewCapitalAccount",
                                    "viewReports",
                                    "viewDocuments",
                                    "viewAccount"
                                ]
                            }
                        ]
                    }
                ],
                "gps": [
                    {
                        "id": "d6100bf8-fde3-4569-ab51-0f70c3b2885e",
                        "name": "Join Capital",
                        "logos": {
                            "bigUrl": "/assets/join_capital_logo_1.svg",
                            "smallUrl": "/assets/join_logo_tablet.svg"
                        },
                        "colors": {
                            "primary": "#00C091",
                            "primaryLight": "#B9DAD7",
                            "secondary": "#dbd0fa",
                            "secondaryLight": "#5dd5e9"
                        }
                    },
                    {
                        "id": "6924f135-dfc1-44cb-b30d-b695abd42488",
                        "name": "Interface",
                        "logos": {
                            "bigUrl": "/assets/interface.svg",
                            "smallUrl": "/assets/interface.svg"
                        },
                        "colors": {
                            "primary": "#c65b8e",
                            "primaryLight": "#d890b3",
                            "secondary": "#db9152",
                            "secondaryLight": "#e6b893"
                        }
                    },
                    {
                        "id": "69a95abb-3d39-471f-944b-318359fcd68e",
                        "name": "Vireo",
                        "logos": {
                            "bigUrl": "/assets/vireo.svg",
                            "smallUrl": "/assets/vireo_small.svg"
                        },
                        "colors": {
                            "primary": "#208aab",
                            "primaryLight": "#a2cedc",
                            "secondary": "#06a589",
                            "secondaryLight": "#98d8cf"
                        }
                    },
                    {
                        "id": "f7a2dc5f-6cc7-49a7-a6ac-77c0732c5e62",
                        "name": "StellaVent",
                        "logos": {
                            "bigUrl": "/assets/stella-vent.svg",
                            "smallUrl": "/assets/stella-vent_small.svg"
                        },
                        "colors": {
                            "primary": "#0e2d44",
                            "primaryLight": "#a2b1bb",
                            "secondary": "#eb6760",
                            "secondaryLight": "#edb3b2"
                        }
                    },
                    {
                        "id": "83218c2c-7e70-4a49-9cb0-60655f229659",
                        "name": "Redstone",
                        "logos": {
                            "bigUrl": "/assets/redstone.svg",
                            "smallUrl": "/assets/redstone.svg"
                        },
                        "colors": {
                            "primary": "#425360",
                            "primaryLight": "#BFC9CE",
                            "secondary": "#c10230",
                            "secondaryLight": "#e14069"
                        }
                    },
                    {
                        "id": "9f326070-44f5-4188-9605-ae5d99cc0c7f",
                        "name": "Blockchain Founders",
                        "logos": {
                            "bigUrl": "/assets/blockchain-founders.svg",
                            "smallUrl": "/assets/blockchain-founders.svg"
                        },
                        "colors": {
                            "primary": "#003774",
                            "primaryLight": "#97B0C8",
                            "secondary": "#0074B7",
                            "secondaryLight": "#9CC8E2"
                        }
                    },
                    {
                        "id": "1f11eb39-863b-4599-af07-b185e0e90b43",
                        "name": "2bX",
                        "logos": {
                            "bigUrl": "/assets/2bx.svg",
                            "smallUrl": "/assets/2bx.svg"
                        },
                        "colors": {
                            "primary": "#1A1835",
                            "primaryLight": "#9B9EAC",
                            "secondary": "#09E580",
                            "secondaryLight": "#89EEC3"
                        }
                    }
                ],
                "vehicles": [
                    {
                        "id": "e782dafc-4fea-4365-b07c-12c2e7b05a61",
                        "name": "Join Fund 1",
                        "gpId": "d6100bf8-fde3-4569-ab51-0f70c3b2885e",
                        "separators": {
                            "thousands": ",",
                            "decimal": "."
                        },
                        "negativeNumbers": "minusSign",
                        "abbreviations": {
                            "thousand": "k",
                            "million": "m",
                            "billion": "bn"
                        },
                        "currency": "EUR"
                    },
                    {
                        "id": "2801c07a-9b8e-4f17-aaae-cb50cf21c728",
                        "name": "Join Fund 2",
                        "gpId": "d6100bf8-fde3-4569-ab51-0f70c3b2885e",
                        "separators": {
                            "thousands": ",",
                            "decimal": "."
                        },
                        "negativeNumbers": "minusSign",
                        "abbreviations": {
                            "thousand": "k",
                            "million": "m",
                            "billion": "bn"
                        },
                        "currency": "EUR"
                    },
                    {
                        "id": "44f8d051-3379-46b8-8a10-4b26d459c09f",
                        "name": "Interface Fund",
                        "gpId": "6924f135-dfc1-44cb-b30d-b695abd42488",
                        "separators": {
                            "thousands": ",",
                            "decimal": "."
                        },
                        "negativeNumbers": "parentheses",
                        "abbreviations": {
                            "thousand": "k",
                            "million": "M",
                            "billion": "B"
                        },
                        "currency": "EUR"
                    },
                    {
                        "id": "49b43e82-6b96-42d1-8510-014e364ce304",
                        "name": "Vireo Fund",
                        "gpId": "69a95abb-3d39-471f-944b-318359fcd68e",
                        "separators": {
                            "thousands": ",",
                            "decimal": "."
                        },
                        "negativeNumbers": "parentheses",
                        "abbreviations": {
                            "thousand": "k",
                            "million": "M",
                            "billion": "B"
                        },
                        "currency": "EUR"
                    },
                    {
                        "id": "7ff9131f-81ce-4bb4-b17c-27337e86a87a",
                        "name": "StellaVent Fund",
                        "gpId": "f7a2dc5f-6cc7-49a7-a6ac-77c0732c5e62",
                        "separators": {
                            "thousands": ",",
                            "decimal": "."
                        },
                        "negativeNumbers": "parentheses",
                        "abbreviations": {
                            "thousand": "k",
                            "million": "M",
                            "billion": "B"
                        },
                        "currency": "EUR"
                    },
                    {
                        "id": "2ccb8516-2487-4372-9bcf-f609b9b11920",
                        "name": "Redstone Fund",
                        "gpId": "83218c2c-7e70-4a49-9cb0-60655f229659",
                        "separators": {
                            "thousands": ".",
                            "decimal": ","
                        },
                        "negativeNumbers": "parentheses",
                        "abbreviations": {
                            "thousand": "k",
                            "million": "M",
                            "billion": "B"
                        },
                        "currency": "EUR"
                    },
                    {
                        "id": "cddee0af-6759-44cd-a186-55a4b2baac33",
                        "name": "Blockchain Founders Fund",
                        "gpId": "9f326070-44f5-4188-9605-ae5d99cc0c7f",
                        "separators": {
                            "thousands": ",",
                            "decimal": "."
                        },
                        "negativeNumbers": "parentheses",
                        "abbreviations": {
                            "thousand": "k",
                            "million": "M",
                            "billion": "B"
                        },
                        "currency": "EUR"
                    },
                    {
                        "id": "c442bcd8-eb36-4c5a-869b-e9a5d62e3214",
                        "name": "2bX Fund",
                        "gpId": "1f11eb39-863b-4599-af07-b185e0e90b43",
                        "separators": {
                            "thousands": ".",
                            "decimal": ","
                        },
                        "negativeNumbers": "parentheses",
                        "abbreviations": {
                            "thousand": "k",
                            "million": "M",
                            "billion": "B"
                        },
                        "currency": "EUR"
                    },
                    {
                        "id": "bfe3ab72-4b05-48f8-b60b-7edc3ed4ee55",
                        "name": "Demo One Vehicle",
                        "gpId": "d6100bf8-fde3-4569-ab51-0f70c3b2885e",
                        "separators": {
                            "thousands": ",",
                            "decimal": "."
                        },
                        "negativeNumbers": "minusSign",
                        "abbreviations": {
                            "thousand": "k",
                            "million": "m",
                            "billion": "bn"
                        },
                        "currency": "EUR"
                    }
                ]
            }
        }

    }).as('storeData')
    cy.get('.mat-option-text').eq(2).should('contains', 'Join Fund 2').click()
    cy.wait('@storeData').then(({request,response})=> {
        cy.get(img[src="/assets/join_capital_logo_1.svg"]).should('contains',response.body.gps.name)
    })

})
})
})



