export function preencheForm()
{
    cy.wait(5000)

    cy.waitUntil(() => 
        cy.get("#userName")
        .should("be.visible"))

    cy.get('#userName')
        .click()
        .type("Regiane")

    cy.get('#userEmail')
        .click()
        .type("regiane@gmail.com")

    cy.get('#currentAddress')
        .click()
        .type("Rua: Minha rua 01")

    cy.get('#permanentAddress')
        .click()
        .type("Rua: Minha rua 01")

    cy.get('#submit')
        .click()

    cy.get("#output > div")
        .should("be.visible")
}