function doLogin(dadosTeste)
{
    cy.get("#mat-input-0")
        .type(dadosTeste.user);
    cy.get("#mat-input-1")
        .type(dadosTeste.senha);
    cy.get("#button-login")
        .click();
}