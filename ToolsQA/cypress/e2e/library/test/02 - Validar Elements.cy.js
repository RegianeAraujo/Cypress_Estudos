import { preencheForm } from "../function/02_preencheForm";
import { screenElements00, screenElements01, screenElements02 } from "../function/screenElements";
import { visitarHomePage } from "../function/01_visitar";

it('02.1 - Validar preench formulário a partir de Home > Elements - Forma02', () => {
    visitarHomePage();

    cy.get("div > div > div > h5")
        .eq(0)
        .click()

    cy.get(".pattern-backgound.playgound-header")
        .should("be.visible")
        .and("have.text", "Elements");

    cy.get("#item-0")
        .click()

    preencheForm();
});
it('02.2 - Validar preench formulário a partir de Elements - Forma02', () => {
    screenElements00();
});

it('02.3 - Validar preench formulário a partir de Elements - - Forma03', () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get('#item-0')
        .click()
    preencheForm();
});

it('02.4 - Validar preench formulário a partir de Elements - - Forma04', () => {
    screenElements02();
});

/*
Forma correta quando necessário realizar alguma ação antes do testes,
    utilizar beforeEach, ou seja, antes de cada...
*/

context("02.5 - Validar preench formulário a partir de Elements - - Forma05", () => 
{
    beforeEach('Antes de cada...', () =>
    {
        //Para realizar visitar
        cy.visit("https://demoqa.com/");
        //Para pegar elementos
        cy.get("header >a >img")
            .should("be.visible");
    
        cy.get("div > div > div > h5 ")
            .eq(0)
            .click()
    
        cy.get(".pattern-backgound.playgound-header")
            .should("be.visible")
            .and("have.text", "Elements");


    });

    it('02.5 - Validar preench formulário a partir de Elements - Forma05', () => {
        cy.get("#item-0")
            .eq(0)
            .click()

        cy.get('#userName')
            .type("Regiane")

        cy.get('#userEmail')
            .type("regiane@gmail.com")

        cy.get('#currentAddress')
            .type("Rua: Minha rua 01")

        cy.get('#permanentAddress')
            .type("Rua: Minha rua 01")

        cy.get('#submit')
            .click()

        cy.get("#output > div")
            .should("be.visible")
    });
});
