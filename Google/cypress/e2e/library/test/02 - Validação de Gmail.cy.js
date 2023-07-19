import { visitandoGmail_01, visitandoGmail_02, visitandoGmail_03 } from "../function/doVisitGmail";

    describe('02 - Gmail', () => 
    {
        it('02.1 - Validar acesso a tela do Gmail - Usando Steps', () => 
        {
            cy.visit(Cypress.env("baseUrl"));

            cy.waitUntil(() =>
                cy.get('.k1zIA.rSk4se > img')
                    .should("be.visible"))

            cy.get(".gb_w.gb_x > .gb_v")
                .eq(0)
                .click()

            cy.waitUntil(() =>
                cy.get('.feature__chapter > .feature__chapter__title')
                    .should("be.visible"))
        });
        it('02.2 - Validar acesso a tela do Gmail - Usando FUNÇÃO Forma01', () => 
        {
            visitandoGmail_01();
        });
        it('02.3 - Validar acesso a tela do Gmail - Usando FUNÇÃO Forma02', () => 
        {
            visitandoGmail_02();
        });
        it('02.4 - Validar acesso a tela do Gmail - Usando FUNÇÃO Forma03', () => 
        {
            visitandoGmail_03();
        });
    });