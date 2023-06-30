describe('02 - Renner', () => {
    it('Pesquisando item', () => {
        cy.visit(Cypress.env("baseUrl_2"))

        cy.waitUntil(() =>
        cy.get('.main-content > .ic-logo-renner > .ic-renner')
            .should("be.visible"))

        cy.get(".search > input")
            .type("Calça Jeans")
        cy.get('.main-content > .ic-logo-renner > .ic-renner')
            .click()
    });
});

/*
cy.get(".iconfont.icon-close.she-close")
            .click()
        cy.get("form > .flex > button")
            .click()
            .type("Calça jeans")
*/