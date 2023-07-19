// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-wait-until';

//Determinando prioridades para o seletor da ferramenta cypress
Cypress.SelectorPlayground.defaults({
    selectorPriority: ['id', 'class', 'attributes', 'data-cy', 'data-test', 'data-testid', 'tag', 'nth-child']
})

//Removendo da apresentação da interface gráfica as requisições htpp
if (Cypress.config("hideXHRInCommandLog"))
{
    const app = window.top;
    if (
    app &&
    !app.document.head.querySelector("[data-hide-command-log-request]")
    ) {
    const style = app.document.createElement("style");
    style.innerHTML =
    ".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute("data-hide-command-log-request", "");
    app.document.head.appendChild(style);
    }
}