describe('suite', ()=>{
it( 'locs test', ()=>{
    cy.visit("https://www.amazon.com/")
    cy.get('input#twotabsearchtextbox').type("T-Shirts")
    cy.get('input#nav-search-submit-button').click()
    cy.get('span.a-size-base.a-color-secondary.a-text-normal').contains('product') //assertion~
})


}
)