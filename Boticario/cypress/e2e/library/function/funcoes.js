export function visitando() 
{
    cy.visit(Cypress.env("baseUrl"));

    cy.waitUntil(() =>
        cy.get('#onetrust-accept-btn-handler').should("be.visible"))

    cy.get('#onetrust-accept-btn-handler').click()
}