describe('tb prc',()=>{
    it('ap one',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example>a').invoke('removeAttr','target').click();
    })
})