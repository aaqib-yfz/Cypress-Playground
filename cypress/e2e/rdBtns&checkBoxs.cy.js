Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
describe('Check UI elements',()=>{
    // it('Checking Radio Buttons',()=>{
    //     cy.visit('https://demoqa.com/')
    //     cy.get('svg[stroke=\"currentColor\"][viewBox=\"0 0 448 512\"]').click()
    //     cy.xpath('//span[normalize-space()=\'Radio Button\']').click()
    //     // cy.get('input#yesRadio').should('be.visible')
    //     cy.get('input#yesRadio').check({force:true}).should('be.checked')
    //     cy.get('input#noRadio').should('not.be.checked')
    // })

    it('checking checkboxes',()=>{
        cy.visit('https://demoqa.com/elements')
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
        cy.get('.rct-checkbox').should('be.visible')
        cy.get('#tree-node-home').check({force:true}).should('be.checked')

        cy.get('#tree-node-home').first().check().should('be.checked')
    })
    
})