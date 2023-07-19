/// <reference types="Cypress"/>

describe('01 - Cadastro', () => {
    it('02.1 - Validar page Cadastro', () => 
    {
        cy.visit("https://demo.opencart.com/")

        cy.get(".nav.float-end > ul > li > .dropdown >  a > span")
                .click()
            cy.get("li > .dropdown > ul > li > a") 
                .eq(0)
                .click() 
            cy.get("h1")
                .should("be.visible")

        cy.get("div > input")
            .eq(1)
            .type("azul ceu")

        cy.get("div > input")
            .eq(2)
            .type(" Araujo")

        cy.get("div > input")
            .eq(3)
            .type("re_yk@gmail.com")

        cy.get("div > input")
            .eq(4)
            .type("123RA")

        cy.get("div > input")
            .eq(5)
            .click()

        cy.get("div > input")
            .eq(7)
            .click()

        cy.get(".float-end > button")
            .click()

        cy.get("h2")
            .should("have.text", "Cadastro realizado com sucesso")
    });
    it('02.2 - Validar page Cadastro', () => 
    {
        cy.visit("https://demo.opencart.com/")

        cy.get(".nav.float-end > ul > li > .dropdown >  a > span")
                .click()
            cy.get("li > .dropdown > ul > li > a") 
                .eq(0)
                .click() 
            cy.get("h1")
                .should("be.visible")

        cy.get("div > input")
            .eq(1)
            .type("azul ceu")

        cy.get("div > input")
            .eq(2)
            .type(" Araujo")

        cy.get("div > input")
            .eq(3)
            .type("re_yk@gmail.com")

        cy.get("div > input")
            .eq(4)
            .type("123RA")

        cy.get("div > input")
            .eq(5)
            .click()

        cy.get("div > input")
            .eq(7)
            .click()

        cy.get(".float-end > button")
            .click()

        cy.get("#logo")
            .should("be.visible")
    });

})