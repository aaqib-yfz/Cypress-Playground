///  <reference types = "cypress"/>

describe(' handling frames',()=>{
    it.skip('one app',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');
        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

            iframe.clear().type('welcome')
    })

    it.skip('custom',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.getIframe('#mce_0_ifr');
    })
    
    it('plugin',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
    })
})

