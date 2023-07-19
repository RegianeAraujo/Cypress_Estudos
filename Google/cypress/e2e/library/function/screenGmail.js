import { visitandoGmail_03 } from "./doVisitGmail";

    export function criarConta()
    {
        visitandoGmail_03();

        cy.get(".feature__chapter__button > .button")
            .eq(0)
            .should("have.visible")
            .and("have.css", "background-color", "rgb(26, 115, 232)")
            .and("contain", "Criar uma conta")
            .click();

        cy.waitUntil(() => 
            cy.get(".ahT6S")
                .should("be.visible"))
    }