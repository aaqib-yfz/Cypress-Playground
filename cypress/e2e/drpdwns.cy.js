/// <reference types = "cypress"/>

describe(' handling dropdowns uwu', () => {
    // it('with select', () => {
    //     cy.visit('https://www.zoho.com/commerce/free-demo.html')
    //     cy.get('select#zcf_address_country').select('Italy').should('have.value', 'Italy')
    //     cy.get('.chk_bx').check().should('be.checked')
    // })

    it('without select',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy')
    })
})
//.select2-search__field