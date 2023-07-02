/* eslint-disable no-undef */
describe('patient page', () => {
  beforeEach(() => {
    /*  cy.intercept('POST', 'http://localhost:5173/login', (req) => {
      const { email } = req.body

      if (email === 'nicolas.ayan18@gmail.com') {
        req.reply({
          statusCode: 200,
          body: {
            user: {
              email: 'nicolas.ayan18@gmail.com',
              password: '123456'
              // Add any other necessary user data
            }
            // Add any other necessary response data
          }
        })
      } else {
        req.reply({
          statusCode: 401,
          body: {
            error: 'Invalid credentials'
            // Add any other necessary error data
          }
        })
      }       it didtn work
    }) */

    cy.visit('http://localhost:5173/patients')

    /*  cy.visit('http://localhost:5173/')
    cy.contains('Iniciar Sesion').click()
    cy.get('[name="email"]').type('nicolas.ayan18@gmail.com')
    cy.get('[name="password"]').type('123456')
    cy.get('[name="login-btn"]').click()            i need to do a mock for this part because if i logged the page redirects me inmediatly to the patient url and the tests throws error, so i need to do a mock, but idk how to do it yet, i will learned it soon, i know i don´t know much testing, but i will improve  */
  })

  it('check visible content', () => {
    cy.contains('Pacientes')
  })

  /* it('logout', () => {
    cy.contains('Cerrar sesion').click()
    cy.url().should('eq', 'http://localhost:5173/')
  }) */

  it('add patient', () => {
    cy.contains('Pacientes')
    cy.contains('Agregar Paciente').click({ force: true })
    cy.get('[placeholder="Juan Castro"]').type('Nicolas Ayan {enter}')
    cy.contains('Nicolas Ayan')
  })

  /* it.only('edit patient', () => {
    cy.get(':nth-child(1) > .flex > [name="edit-icon"]').click()
    cy.wait(500)
    cy.get('#add-patient-dialog')             it doesnt workkkkkkkkkkkkkkkkkkkkkkkkkkk lpm
      .invoke('show')
      .should('be.visible')
      .within(() => {
        cy.get('[name="query"]').click({ force: true }).clear().type('random text {enter}')
      })
  }) */
})
