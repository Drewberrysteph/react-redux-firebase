
it('should delete a user', () => {
    cy.visit('/')
    cy.findByTestId(/delete-icon-3lF8Pq445ZcNu8qw0HzN/i).click()
    cy.findByRole('button', { name: /yes/i }).click()
})