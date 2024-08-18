
describe('Assertion',()=>{
    it('Implicit Assertion',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // should and 
        
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrm')

        // cy.url().should('include','orangehrmlive.com').should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').should('contain','orangehrm')
        
        cy.url().should('include','orangehrmlive.com').and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').and('contain','orangehrm').and('not.contain','greenhrm')

        cy.title().should('include','Orange').and('eq','OrangeHRM')
        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

        cy.xpath('//a').should('have.length','5') //no of links
        cy.get('.oxd-input.oxd-input--active[ name = \'username\']').type('Admin').should('have.value','Admin')
    })

    it('Explicit Assertions',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.oxd-input.oxd-input--active[ name = \'username\']').type('Admin')
        cy.get('input.oxd-input.oxd-input--active[name = \'password\']').type('admin123')
        cy.get('button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click()
    
        let expName = 'abc';

        cy.get('p.oxd-userdropdown-name').then( (x)=>{
        let actName = x.text()
        //BDD style 
        expect( actName ).to.equal(expName)
        expect(actName).to.not.equal(expName)
        
        //TDD style
        assert.equal(actName,expName)
        assert.not.equal(actName,expName)
    })
    })


    
}
)