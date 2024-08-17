describe( 'xpath tests', ()=>{

    it('xp loc test ', ()=>{
        cy.visit("https://www.amazon.com/")
        cy.xpath("//input[@id='twotabsearchtextbox']").type('hello')
    })
}
)