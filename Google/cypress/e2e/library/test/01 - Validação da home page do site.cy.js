import { visitando } from "../function/doVisit";

    describe('01 - Google', () => 
    {
        it('01.1 - Validar acesso a tela do Google - Usando Steps', () => 
        {
            cy.visit(Cypress.env("baseUrl"));

            cy.waitUntil(() =>
                cy.get('.k1zIA.rSk4se > img')
                    .should("be.visible"))
        });
        it('01.2 - Validar acesso a tela do Google - Usando FUNÇÃO', () => 
        {
            visitando();
        });
    });