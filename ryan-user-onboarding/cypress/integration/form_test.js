describe('User Onboarding', () => {
    beforeEach(() => {
        // New state
        cy.visit('http://localhost:3000/')
    })
})

const nameInput = () => cy.get('input[name=name]')
const emailInput = () => cy.get('input[name=email]')
const passwordInput = () => cy.get('input[name=password]')
const termsInput = () => cy.get('input[name=terms]')
const submitButton = () => cy.get(`button[id="submit"]`)

it('elements exist', () => {
    nameInput().should('exist')
    emailInput().should('exist')
    passwordInput().should('exist')
    termsInput().should('exist')
    submitButton().should('exist')
})

describe('Type into the input fields and submit form', () => {

    const testName = 'Duece Bigalow'
    const testEmail = 'duece@gigalow.net'
    const testPassword = 'password1234!'

    it('submit is disabled at first', () => {
        submitButton().should('be.disabled')
    })

    it('can check the terms box', () => {
        termsInput()
            .should('not.be.checked')
            .check()
            .should('be.checked')
    })

    it('can type into the input fields and submit', () => {
        nameInput()
            .type(testName)
            .should('have.value', testName)
        emailInput()
            .type(testEmail)
            .should('have.value', testEmail)
        passwordInput()
            .type(testPassword)
            .should('have.value', testPassword)
        submitButton()
            .should('not.be.disabled')
            .click()
        nameInput().should('have.value', '')
        emailInput().should('have.value', '')
        passwordInput().should('have.value', '')
        submitButton().should('be.disabled')
    })

})