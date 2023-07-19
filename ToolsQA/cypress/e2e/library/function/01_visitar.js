export function visitarHomePage()
{
    cy.visit("https://demoqa.com/");
    cy.get("header > a >img")
        .should("be.visible");
}

export function visitarMenuElements()
{
    cy.visit("https://demoqa.com/");
    cy.get("header > a >img")
        .should("be.visible");

    //Opção elements da home
    cy.get("div > div > div > h5")
        .eq(0)
        .click()

    cy.get(".pattern-backgound.playgound-header")
        .should("be.visible")
        .and("have.text", "Elements");
}
