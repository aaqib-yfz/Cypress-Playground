///  <reference types = "cypress"/>

describe(' handling frames',()=>{
    it('one app',()=>{
        cy.visit('https://www.w3schools.com/html/html_iframe.asp');
        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

            iframe.clear().type('welcome')
    })

})

