
///  <reference types = "cypress"/>


// Alert1 =  text +  ok button
// confirm Alert = text + ok & cancel btn
// prompt Alert =  text with text box for user input and ok btn
// authenticated alert


describe('Alert',()=>{
    //simple alr
    it.skip('normal alrt', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[ onclick =\'jsAlert()\']').click();
        
        cy.on('window:alert',(text)=>{
            expect(text).to.contain('I am a JS Alert')
        })
        //alert automatically closed by cypress
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })


    //confirmation alr
    it('confirmation alert -ok btn',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[ onclick =\'jsConfirm()\']').click();

        cy.on('window:confirm',(text)=>{
            expect(text).to.contain('I am a JS Confirm')
        })
        
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it.only('confirmation alert - cancel btn',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[ onclick =\'jsConfirm()\']').click();

        cy.on('window:confirm',(text)=>{
            expect(text).to.contain('I am a JS Confirm')
        })
        cy.on('window:confirm',()=>false);
        cy.get('#result').should('have.text','You clicked: Cancel')
    })
}
)