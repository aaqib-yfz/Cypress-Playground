describe('tb prc',()=>{
    it('ap one',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example>a').invoke('removeAttr','target').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.go('back');
    })

    it.only('ap two',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example>a').then((e)=>{
            let url = e.prop('href')
            cy.visit(url);
        })
        cy.wait(2000);
        cy.go('back');
    })
})