import { visitarHomePage, visitarMenuElements } from "./01_visitar";
import { preencheForm } from "./02_preencheForm";

export function screenElements00()
{
    visitarHomePage();

    cy.get("div > div > div > h5")
        .eq(0)
        .click()

    cy.get(".pattern-backgound.playgound-header")
        .should("be.visible")
        .and("have.text", "Elements");

    cy.get('#item-0')
        .click()

    preencheForm();
}

export function screenElements01()
{
    preencheForm();
}

export function screenElements02()
{
    visitarMenuElements();

    cy.get('#item-0')

    preencheForm();
}