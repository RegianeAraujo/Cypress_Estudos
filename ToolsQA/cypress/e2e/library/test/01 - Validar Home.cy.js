import { preencheForm } from "../function/02_preencheForm";
import { screenElements00, screenElements01, screenElements02 } from "../function/screenElements";
import { visitarHomePage, visitarMenuElements } from "../function/01_visitar";

it('01- Validar acesso home', () => {
    //Para realizar visitar
    cy.visit("https://demoqa.com/");
    //Para pegar elementos
    cy.get("header >a >img")
        .should("be.visible");
});

 
it('01.2 - Validar acesso Elements', () => {
    visitarMenuElements();
});