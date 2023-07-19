import { visitando } from "./doVisit";

    export function visitandoGmail_01()
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
    }

    export function visitandoGmail_02()
    {
        visitando();

        cy.get(".gb_w.gb_x > .gb_v")
            .eq(0)
            .click()

        cy.waitUntil(() =>
            cy.get('.feature__chapter > .feature__chapter__title')
                .should("be.visible"))
    }

    export function visitandoGmail_03()
    {
        visitando();

        cy.get(".gb_w.gb_x > .gb_v")
            .eq(0)
            .click()

        cy.waitUntil(() =>
            cy.get('.feature__chapter > .feature__chapter__title')
                .should("be.visible"))
    }