export function visitando() 
{
    //cy.visit01(Cypress.env("baseUrl"));

    cy.visit(Cypress.env("baseUrl_2"));

    cy.waitUntil(() =>
        //cy.get('#onetrust-accept-btn-handler').should("be.visible"))
        cy.get('.main-content > .ic-logo-renner > .ic-renner').should("be.visible"))

        //cy.get('#onetrust-accept-btn-handler').click()
}