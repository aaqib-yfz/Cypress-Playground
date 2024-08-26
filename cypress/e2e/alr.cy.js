
///  <reference types = "cypress"/>


// Alert1 =  text +  ok button
// confirm Alert = text + ok & cancel btn
// prompt Alert =  text with text box for user input and ok btn
// authenticated alert


describe('Alert',()=>{
    //simple alr
    it('normal alrt', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[ onclick =\'jsAlert()\']').click();
        
        cy.on('window:alert',(text)=>{
            expect(text).to.contain('I am a JS Alert')
        })
        //alert automatically closed by cypress
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
}
)