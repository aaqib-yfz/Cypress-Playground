// it('My First Test',() => {
//     cy.visit('https://testautomationu.applitools.com/')
//     cy.get(':nth-child(4) > .btn')
//     cy.contains('SpecFlow')
//     cy.get('.card-text')
//     // cy.get('#cardcourse1.svg')
//     // cy.get('[data-left="87.5"]')
// }) 

describe( 'Suite',() => {

    it( 'test1', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRMn')
    })
})