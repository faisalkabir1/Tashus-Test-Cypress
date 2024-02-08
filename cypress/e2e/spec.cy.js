describe('Visit site and login spec', () => {
  it('passes', () => {
    cy.visit('https://dev-testing.Tashus.com.au')
    cy.get('.MuiContainer-root > .MuiBox-root > .MuiButtonBase-root').click()
    cy.get('.MuiList-root > .MuiContainer-root > :nth-child(1)').click()
    cy.get('input[name="email"]').type('fkkabir70@gmail.com')
    cy.get('form > .MuiButtonBase-root').click()
    cy.get('#outlined-adornment-password').type('Tashus@12345')
    cy.get('form > .MuiButton-root').click()

  })
})