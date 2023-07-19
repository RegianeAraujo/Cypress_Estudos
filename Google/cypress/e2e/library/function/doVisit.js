    export function visitando()
    {
        cy.visit(Cypress.env("baseUrl"));

        cy.waitUntil(() =>
            cy.get('.k1zIA.rSk4se > img')
                .should("be.visible"))
    }