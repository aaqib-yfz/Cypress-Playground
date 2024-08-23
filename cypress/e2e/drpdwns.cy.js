/// <reference types = "cypress"/>

describe(' handling dropdowns uwu', () => {
    it.skip('with select', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('select#zcf_address_country').select('Italy').should('have.value', 'Italy')
        cy.get('.chk_bx').check().should('be.checked')
    })

    it.skip('without select',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Italy')
    })

    it.skip('Auto selected',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Peshawar')
        cy.get('.suggestion-title').contains('Peshawar District').click()
    })

    it( 'Dynamic',()=>{
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('Cypress Automation')
    })
})
//.select2-search__field