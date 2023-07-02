/* eslint-disable no-undef */
describe('register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register')
  })

  it('check visible content', () => {
    cy.get('[href="/"]')
    cy.contains('Registrarse')
    cy.contains('Correo')
    cy.contains('Contraseña')
  })

  it('register user and check register btn background', () => {
    cy.get('[name="email"]').type('test1@gamil.com')
    cy.get('[name="password"]').type('jejejaja123')
    cy.get('[name="register-btn"]').should('have.css', 'background-color', 'rgb(59, 130, 246)').click()
  })

  it('email already in use error', () => {
    cy.get('[name="email"]').type('test1@gamil.com')
    cy.get('[name="password"]').type('jejejaja123')
    cy.get('[name="register-btn"]').should('have.css', 'background-color', 'rgb(59, 130, 246)').click()
    cy.contains('Firebase: Error (auth/email-already-in-use).')
  })

  it('weak password', () => {
    cy.get('[name="email"]').type('test1@gamil.com')
    cy.get('[name="password"]').type('123')
    cy.get('[name="register-btn"]').should('have.css', 'background-color', 'rgb(59, 130, 246)').click()
    cy.contains('Firebase: Password should be at least 6 characters (auth/weak-password).')
  })

  it('invalid email', () => {
    cy.get('[name="email"]').type('test1@gamil.a')
    cy.get('[name="password"]').type('jejejaja123')
    cy.get('[name="register-btn"]').should('have.css', 'background-color', 'rgb(59, 130, 246)').click()
    cy.contains('Firebase: Error (auth/invalid-email).  ')
  })
})
