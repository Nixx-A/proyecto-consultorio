/* eslint-disable no-undef */
describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login')
    cy.get('[name="email"]').as('email')
    cy.get('[name="password"]').as('password')
  })

  it('check visible content', () => {
    cy.get('[href="/"]')
    cy.contains('Iniciar Sesion')
    cy.contains('Correo')
    cy.contains('Contraseña')
  })

  it('inputs writtable and button change disable and background color', () => {
    cy.get('@email').type('nicolas.ayan18@gmail.com')
    cy.get('@password').type('123456')
    cy.get('[name="login-btn"]').should('have.css', 'background-color', 'rgb(59, 130, 246)')
    cy.get('@password').clear()
    cy.get('[name="login-btn"]').should('have.css', 'background-color', 'rgb(209, 213, 219)')
  })

  it('correct redirect', () => {
    cy.get('@email').type('nicolas.ayan18@gmail.com')
    cy.get('@password').type('123456')
    cy.get('[name="login-btn"]').click()
    cy.url().should('eq', 'http://localhost:5173/patients')
  })

  it('wrong password or email', () => {
    cy.get('@email').type('asdas.asdasda@gmail.com')
    cy.get('@password').type('123456')
    cy.get('[name="login-btn"]').click()
    cy.contains('Firebase: Error (auth/user-not-found).')
  })

  it('forgot password email not found', () => {
    cy.contains('Olvidaste tu contraseña?').click()
    cy.contains('Please enter your email')
    cy.get('@email').type('asdas.asdasda@gmail.com')
    cy.get('@password').type('123456')
    cy.get('[name="login-btn"]').click()
    cy.contains('Firebase: Error (auth/user-not-found).')
  })

  it('forgot password email sent', () => {
    cy.contains('Olvidaste tu contraseña?').click()
    cy.contains('Please enter your email')
    cy.get('@email').type('nicolas.ayan18@gmail.com')
    cy.get('@password').type('123')
    // cy.contains('Olvidaste tu contraseña?').click()
    // cy.contains('We sent you an email with the link to reset your password')
  })

  /* it.only('login with google', () => {
    cy.contains('Iniciar sesion con Google').click()      idk how check popups yet :(
  }) */
})
