describe('FormModal Component', () => {
    it('should add user', () => {
        cy.visit('/')
        cy.findByRole('button', { name: /add user/i }).click()
        cy.findByPlaceholderText(/email/i).type('drew@test.com')
        cy.findByPlaceholderText(/firstName/i).type('drew')
        cy.findByPlaceholderText(/lastName/i).type('stifler')
        cy.findByPlaceholderText(/organisation/i).type('drew co.')
        cy.findByTestId(/select-organisation-feature-cy/i).click()
        cy.findByRole('option', {
            name: /inventory/i
        }).click()
        cy.findByRole('option', {
            name: /analytics/i
        }).click().type('{esc}')
        cy.findByTestId(/select-role-cy/i).click()
        cy.findByRole('option', {
            name: /employee/i
        }).click()
        cy.findByTestId(/select-country-cy/i).click()
        cy.findByRole('option', {
            name: /australia/i
        }).click()
        cy.findByRole('button', { name: /save/i }).click()
    })
})