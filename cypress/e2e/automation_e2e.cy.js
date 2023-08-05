describe('template spec', () => {

  it('Add to car 2 items and purchase them', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#tbodyid').contains('Samsung galaxy s6').click()
    cy.get('.btn').contains('Add to cart').click({ force: true })
    cy.get('.nav-link').contains('Home ').click()
    cy.get('#tbodyid').contains('Nexus 6').click()
    cy.get('.btn').contains('Add to cart').click()
    cy.get('#cartur').click()
    cy.get('.btn').contains('Place Order').click()
    cy.get('#name').type('test e2e')
    cy.get('#country').type('Costa Rica')
    cy.get('#city').type('Heredia')
    cy.get('#card').type('114268946507487')
    cy.get('#month').type('January')
    cy.get('#year').type('2023')
    cy.get('.btn').contains('Purchase').click()
  })

})