describe( "handle table",()=>{

    beforeEach('Login',()=>{
        cy.visit('https://the-internet.herokuapp.com/tables');
    });

    it('No of rows and columns',()=>{
        cy.get('table#table1')
    })
})