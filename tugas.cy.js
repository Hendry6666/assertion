/// <reference types="cypress" />

describe('My First Text', () => {
    it('clicking "type" Shows the right heading', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        cy.url().should('include','/commands/actions')

        cy.get('.action-email')
            .type('slow.typing@email.com', { delay: 100 })
            .should('have.value', 'slow.typing@email.com')
    });
})