// Alert1 =  text +  ok button
// confirm Alert = text + ok & cancel btn
// prompt Alert =  text with text box for user input and ok btn
// authenticated alert

describe('Alerts Prac',()=>{
    it('simple alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onClick = \'jsAlert()\']').click()

    cy.on('window:alert',(text)=>{
        expect(text).to.contain('I am a JS Alert')
    })
    })

    it('confirm Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onClick = \'jsConfirm()\']').click();

        cy.on('window:confirm',(text)=>{
            expect(text).to.contain('I am a JS Confirm');
        });
    });

    it('confirm cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onClick = \'jsConfirm()\']').click();
        cy.on('window:confirm',()=>false);
        cy.get('#result').should('have.text','You clicked: Cancel');
    })

    it('prompt',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('hello g')
        });
        cy.get('button[onClick = \'jsPrompt()\']').click();
        
    })

    it.only('auth',()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.wait(3000)
    })

})
