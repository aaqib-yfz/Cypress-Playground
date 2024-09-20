describe( "handle table",()=>{

    beforeEach('Login',()=>{
        cy.visit('https://the-internet.herokuapp.com/tables');
    });

    it('No of rows and columns',()=>{
        cy.get('table#table1 > tbody > tr').should('have.length','4');
        cy.get('table#table1>thead>tr>th').should('have.length','6');
    });

    it('check cell data ',()=>{
        
    })
})