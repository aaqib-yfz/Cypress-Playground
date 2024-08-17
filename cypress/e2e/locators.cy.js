describe('suite', ()=>{
it( 'locs test', ()=>{
    cy.visit("https://www.daraz.pk/")
    cy.get('input.search-box__input--O34g[ name = \'q\']').type("T-Shirts")
    cy.get('a.search-box__button--1oH7').click()
})
}
)