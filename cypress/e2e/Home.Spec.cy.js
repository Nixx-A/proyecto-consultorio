/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('img visilble', () => {
    cy.get('[alt="dentist-icon-home"]')
  })

  it('check if correct navigate to login', () => {
    cy.contains('Iniciar Sesion').click()
    cy.url().should('eq', 'http://localhost:5173/login')
  })

  it('check if correct navigate to register', () => {
    cy.contains('Registrarse').click()
    cy.url().should('eq', 'http://localhost:5173/register')
  })
})
