/* eslint-disable */
describe('home page loaded', () => {
    it('show welcome message', () => {
      // cy.mount()
      cy.visit('http://localhost:5175/')
      cy.contains('Welcome Back')
    })
  })