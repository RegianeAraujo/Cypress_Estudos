import { visitarCadastre_se } from "../functions/visitar";

describe("Teste Loko", () => 
{
    context("Teste Booleano", () =>
    {
        var testeDados = 
        {
            nome : "",
            cpf : "012345678900",
            email: "",
            whats: "099",
            TEST : false
        };

        beforeEach(() =>
        {
            visitarCadastre_se();
        });
        it('teste 01', () =>
         {

            cy.get(".field")
                .eq(3)
                .click()
                .type(testeDados.whats);

            cy.get(".button-success")
                .click();

            if(testeDados.TEST == false)
            {
                cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .alert-error')
                    .should("be.visible")
                    .and("have.text", "É necessário informar o nome")
                if(testeDados.cpf == "")
                {
                    cy.get(':nth-child(2) > :nth-child(2) > .alert-error')
                    .should("be.visible")
                    .and("have.text", "É necessário informar o CPF")
                }
                else if(testeDados.cpf == "01234578900")
                {
                    cy.get(':nth-child(2) > :nth-child(2) > .alert-error')
                    .should("be.visible")
                    .and("have.text", "Oops! CPF inválido")
                }
                if(testeDados.email == "")
                {
                    cy.get(':nth-child(3) > :nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "É necessário informar o email")
                }
                if(testeDados.whats == "099")
                {
                    cy.get(':nth-child(3) > :nth-child(2) > .alert-error')
                    .should("be.visible")
                    .and("have.text", "Oops! Whatsapp com formato incorreto")
                }
            }
        });
    });
});