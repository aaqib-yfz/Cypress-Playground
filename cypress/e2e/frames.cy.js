///  <reference types = "cypress"/>

describe(' handling frames',()=>{
    it('one app',()=>{
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
        cy.get('#iframeResult')
            .its('0.contentDocument.body')
            .then((body) => {
        cy.wrap(body)
        .find("#tnb-google-search-mobile-show")
        .should("be.visible")
        //input#tnb-google-search-input

    })

})
})