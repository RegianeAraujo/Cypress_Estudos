/// <reference types="Cypress"/>

describe('01 - homepage', () => {
    it('01.1 - Validar acesso a home page', () => 
    {
        cy.visit("https://demo.opencart.com/")

        cy.get(".col-12.text-center> a > img")
            .should("be.visible") 
    });

    it('01.2 - Validar acesso a home page', () => 
    {
        cy.visit(Cypress.env("baseUrl"))

        cy.get(".col-12.text-center> a > img")
            .should("be.visible") 
    });
    it('01.3 - Validar menu superior', () => 
    {
        cy.visit(Cypress.env("baseUrl"))

        cy.get(".collapse.navbar-collapse > ul > li")
            .eq(0)
            .should("be.visible")
            //.and("be.enabled")
        cy.get(".collapse.navbar-collapse > ul > li > a")
            .eq(0)
            //.and("contain.html", "a")
            .and("have.attr", "data-bs-toggle", "dropdown")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "color", "rgb(255, 255, 255)")
            .and("have.text", "Desktops")

        cy.get(".collapse.navbar-collapse > ul > li")
            .eq(1)
            .should("be.visible")
            //.and("be.enabled")
        cy.get(".collapse.navbar-collapse > ul > li > a")
            .eq(1)
            //.and("contain.html", "a")
            .and("have.attr", "data-bs-toggle", "dropdown")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "color", "rgb(255, 255, 255)")
            .and("have.text", "Laptops & Notebooks")

        cy.get(".collapse.navbar-collapse > ul > li")
            .eq(2)
            .should("be.visible")
            //.and("be.enabled")
        cy.get(".collapse.navbar-collapse > ul > li > a")
            .eq(2)
            //.and("contain.html", "a")
            .and("have.attr", "data-bs-toggle", "dropdown")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "color", "rgb(255, 255, 255)")
            .and("have.text", "Components")

        cy.get(".collapse.navbar-collapse > ul > li")
            .eq(3)
            .should("be.visible")
            //.and("be.enabled")
        cy.get(".collapse.navbar-collapse > ul > li > a")
            .eq(3)
            //.and("contain.html", "a")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "color", "rgb(255, 255, 255)")
            .and("have.text", "Tablets")

        cy.get(".collapse.navbar-collapse > ul > li")
            .eq(4)
            .should("be.visible")
            //.and("be.enabled")
        cy.get(".collapse.navbar-collapse > ul > li > a")
            .eq(4)
            //.and("contain.html", "a")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "color", "rgb(255, 255, 255)")
            .and("have.text", "Software")

        cy.get(".collapse.navbar-collapse > ul > li")
            .eq(5)
            .should("be.visible")
            //.and("be.enabled")
        cy.get(".collapse.navbar-collapse > ul > li > a")
            .eq(5)
            //.and("contain.html", "a")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "color", "rgb(255, 255, 255)")
            .and("have.text", "Phones & PDAs")

        cy.get(".collapse.navbar-collapse > ul > li")
            .eq(6)
            .should("be.visible")
            //.and("be.enabled")
        cy.get(".collapse.navbar-collapse > ul > li > a")
            .eq(6)
            //.and("contain.html", "a")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "color", "rgb(255, 255, 255)")
            .and("have.text", "Cameras")

        cy.get(".collapse.navbar-collapse > ul > li")
            .eq(7)
            .should("be.visible")
            //.and("be.enabled")
        cy.get(".collapse.navbar-collapse > ul > li > a")
            .eq(7)
            //.and("contain.html", "a")
            .and("have.attr", "data-bs-toggle", "dropdown")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "color", "rgb(255, 255, 255)")
            .and("have.text", "MP3 Players")
    });

      it('01.xxxx Validar Rodapé', () => 
      {
        cy.visit(Cypress.env("baseUrl"))

        cy.get(".container > p")
            .should("be.visible")
            .and("have.css", "color", "rgb(226, 226, 226)")
            .and("have.text", "Powered By OpenCart Your Store © 2023")

        cy.get(".container > p")
            .scrollIntoView()
            .should("be.visible")
            .and("have.css", "color", "rgb(226, 226, 226)")
            .and("have.text", "Powered By OpenCart Your Store © 2023")
      });

      it.only('01.xxxx', () => 
      {
            cy.visit(Cypress.env("baseUrl"))

            cy.get(".nav.float-end > ul > li > .dropdown >  a > span")
                .click()
            cy.get("li > .dropdown > ul > li > a") 
                .eq(0)
                .click() 
            cy.get("h1")
                .should("be.visible")
      });

      it.only('01.xxxx', () => 
      {
            cy.visit(Cypress.env("baseUrl"))

            cy.get(".nav.float-end > ul > li > .dropdown >  a > span")
                .click()
            cy.get("li > .dropdown > ul > li > a") 
                .eq(0)
                .click() 
            cy.get("h1")
                .should("be.visible")

            
      });
});