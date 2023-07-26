import { visitarCadastre_se } from "../functions/visitar";

describe('03-  -Formulário de Cadastro - Dados Inválidos', () => 
{
    beforeEach(() => 
    {
        visitarCadastre_se ();
    });
    context("03.1 - Validar cadastro somente com Nome.", () => 
    {
        it('03.1.1 -  Validar 0 caracter', () => 
        {
            cy.get(".field")
                .eq(0)
                .click();

            cy.get(".button-success")
                .click();

            cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "É necessário informar o nome")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.1.2 -  Validar 1 caracteres', () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("R");;

            cy.get(".button-success")
                .click();

            cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "É necessário informar o nome com 2 caracteres ou mais")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.1.3 -  Validar 2 caracteres', () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("Rê");

            cy.get(".button-success")
                .click();

            cy.get(':nth-child(2) > :nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "É necessário informar o CPF")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.1.4 -  Validar 81 caracteres', () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("Isabel Cristina Leopoldina Augusta Micaela Gabriela Rafaela Gonzaga de Bragança e Bourbon,");

            cy.get(".button-success")
                .click();

            cy.get(':nth-child(2) > :nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "É necessário informar o CPF")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
    });
    context("03.2 - Validar cadastro somente com CPF.", () => 
    {
        it('03.2.1 -  Validar 0 caracter', () => 
        {
            cy.get(".field")
                .eq(1)
                .click();

            cy.get(".button-success")
                .click();

            cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "É necessário informar o nome")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.2.2 -  Validar 1 caracter', () => 
        {
            cy.get(".field")
                .eq(1)
                .click()
                .type("1");

            cy.get(".button-success")
                .click();

            cy.get(':nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! CPF inválido")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.2.3 -  Validar 10 caracter', () => 
        {
            cy.get(".field")
                .eq(1)
                .click()
                .type("1075786088");

            cy.get(".button-success")
            .click();

            cy.get(':nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! CPF inválido")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.2.4 -  Validar 11 caracter', () => 
        {
            cy.get(".field")
                .eq(1)
                .click()
                .type("10757860885");

            cy.get(".button-success")
                .click();

            cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "É necessário informar o nome")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.2.5 -  Validar caracter especial', () => 
        {
            cy.get(".field")
                .eq(1)
                .click()
                .type("@!?");

            cy.get(".button-success")
                .click();

            cy.get(':nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! CPF inválido")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.2.6 -  Validar caracter letra', () => 
        {
            cy.get(".field")
                .eq(1)
                .click()
                .type("abc");

            cy.get(".button-success")
                .click();

            cy.get(':nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! CPF inválido")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.2.7 -  Validar 11 caracter - Num + Letra + C. Esp', () => 
        {
            cy.get(".field")
                .eq(1)
                .click()
                .type("1075786@?ab");

            cy.get(".button-success")
                .click();

            cy.get(':nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! CPF inválido")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
    });
    context("03.3 - Validar cadastro somente com E-mail.", () => 
    {
         it('03.3.1 -  Validar cadastro vazio', () => 
        {
            cy.get(".field")
                .eq(2)
                .should("be.visible")
                .click();

            cy.get(".button-success")
                .click();


            cy.get(':nth-child(3) > :nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "É necessário informar o email")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.3.2 -  Validar cadastro letra + caract + letra', () => 
        {
            cy.get(".field")
                .eq(2)
                .should("be.visible")
                .click()
                .type('a@b');

            cy.get(".button-success")
                .click();


            cy.get(':nth-child(3) > :nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! Email com formato inválido.")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.3.3 -  Validar cadastro 1 carac + @ + gmail', () => 
        {
            cy.get(".field")
                .eq(2)
                .should("be.visible")
                .click()
                .type('a@gmail');

            cy.get(".button-success")
                .click();

            cy.get(':nth-child(3) > :nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! Email com formato inválido.")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.3.4 -  Validar cadastro com Num  + caracter + letra ', () => 
        {
            cy.get(".field")
                .eq(2)
                .should("be.visible")
                .click()
                .type('123@teste');

            cy.get(".button-success")
                .click();

                cy.get(':nth-child(3) > :nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! Email com formato inválido.")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.3.5 -  Validar cadastro com Num  + caracter + letra ', () => 
        {
            cy.get(".field")
                .eq(2)
                .should("be.visible")
                .click()
                .type('123@teste');

            cy.get(".button-success")
                .click();

                cy.get(':nth-child(3) > :nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! Email com formato inválido.")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.3.5 -  Validar cadastro aceitar num + letra + carac espc', () => 
        {
            cy.get(".field")
                .eq(2)
                .should("be.visible")
                .click()
                .type('123456789@gmail');

            cy.get(".button-success")
                .click();

                cy.get(':nth-child(3) > :nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! Whatsapp com formato incorreto")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
    });
    context("03.4 - Validar cadastro somente com E-mail.", () => 
    {
        it('03.4.1 -  Validar whatsapp com 1 numero', () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("Alexandra");

            cy.get(".field")
                .eq(1)
                .click()
                .type("12345678900");

            cy.get(".field")
                .eq(2)
                .click()
                .type("teste@gmail.com");

            cy.get(".field")
                .eq(3)
                .click()
                .type("1");
                
            cy.get(".button-success")
                .click();

            cy.get(':nth-child(3) > :nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! Whatsapp com formato incorreto")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.4.2 -  Validar whatsapp com nº residencial', () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("Alexandra");

            cy.get(".field")
                .eq(1)
                .click()
                .type("12345678900");

            cy.get(".field")
                .eq(2)
                .click()
                .type("teste@gmail.com");

            cy.get(".field")
                .eq(3)
                .click()
                .type("41889567");
                
            cy.get(".button-success")
                .click();

            cy.get(':nth-child(3) > :nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! Whatsapp com formato incorreto")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.4.3 -  Validar whatsapp com letra', () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("Alexandra");

            cy.get(".field")
                .eq(1)
                .click()
                .type("12345678900");

            cy.get(".field")
                .eq(2)
                .click()
                .type("teste@gmail.com");

            cy.get(".field")
                .eq(3)
                .click()
                .type("teste");
                
            cy.get(".button-success")
                .click();

            cy.get(':nth-child(3) > :nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! Whatsapp com formato incorreto")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.4.4 -  Validar whatsapp com letra e esp', () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("Alexandra");

            cy.get(".field")
                .eq(1)
                .click()
                .type("12345678900");

            cy.get(".field")
                .eq(2)
                .click()
                .type("teste@gmail.com");

            cy.get(".field")
                .eq(3)
                .click()
                .type("t e s t e");
                
            cy.get(".button-success")
                .click();

            cy.get(':nth-child(3) > :nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! Whatsapp com formato incorreto")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.4.5 -  Validar whatsapp com letra e nº', () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("Alexandra");

            cy.get(".field")
                .eq(1)
                .click()
                .type("12345678900");

            cy.get(".field")
                .eq(2)
                .click()
                .type("teste@gmail.com");

            cy.get(".field")
                .eq(3)
                .click()
                .type("t1e2s3t4e5");
                
            cy.get(".button-success")
                .click();

            cy.get(':nth-child(3) > :nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! Whatsapp com formato incorreto")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.4.6 -  Validar whatsapp com espaço nº + letra + carac' , () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("Alexandra");

            cy.get(".field")
                .eq(1)
                .click()
                .type("12345678900");

            cy.get(".field")
                .eq(2)
                .click()
                .type("teste@gmail.com");

            cy.get(".field")
                .eq(3)
                .click()
                .type("1 A @ ");
                
            cy.get(".button-success")
                .click();

            cy.get(':nth-child(3) > :nth-child(2) > .alert-error')
                .should("be.visible")
                .and("have.text", "Oops! Whatsapp com formato incorreto")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.4.7 -  Validar whatsapp com 12nº' , () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("Alexandra");

            cy.get(".field")
                .eq(1)
                .click()
                .type("12345678900");

            cy.get(".field")
                .eq(2)
                .click()
                .type("teste@gmail.com");

            cy.get(".field")
                .eq(3)
                .click()
                .type("11963258741");
                
            cy.get(".button-success")
                .click();

                cy.get(':nth-child(2) > :nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "É necessário informar o CEP")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
    });
    context("03.5 - Validar cadastro somente com CEP.", () => 
    {
        it('03.5.1 -  Validar sem número.' , () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("Alexandra");

            cy.get(".field")
                .eq(1)
                .click()
                .type("12345678900");

            cy.get(".field")
                .eq(2)
                .click()
                .type("teste@gmail.com");

            cy.get(".field")
                .eq(3)
                .click()
                .type("11963258741");

            cy.get(".field")
                .eq(4)
                .click()
                .type("06331280");

            cy.get(".field > input")
                .eq(5)
                .click();
                
            cy.get(".button-success")
                .click();

            cy.get(':nth-child(1) > .alert-error')
                .should("be.visible")
                .and("have.text", "É necessário informar o número do endereço")
                .and("have.css", "color", "rgb(234, 96, 151)");
        });
        it('03.5.2 -  Validar endereço buscado' , () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("Alexandra");

            cy.get(".field")
                .eq(1)
                .click()
                .type("12345678900");

            cy.get(".field")
                .eq(2)
                .click()
                .type("teste@gmail.com");

            cy.get(".field")
                .eq(3)
                .click()
                .type("11963258741");

            cy.get(".field")
                .eq(4)
                .click()
                .type("06331280");

            cy.get(".field > input")
                .eq(5)
                .click();

            cy.get(".field > input")
                .eq(6)
                .should("be.visible")
                .should("have.value", "Rua Venâncio Costa")

            cy.get(".field")
                .eq(7)
                .click()
                .type(10);

            cy.get(".button-success")
                .click();
        });
        it('03.5.3 -  Validar endereço buscado' , () => 
        {
            cy.get(".field")
                .eq(0)
                .click()
                .type("Alexandra");

            cy.get(".field")
                .eq(1)
                .click()
                .type("12345678900");

            cy.get(".field")
                .eq(2)
                .click()
                .type("teste@gmail.com");

            cy.get(".field")
                .eq(3)
                .click()
                .type("11963258741");

            cy.get(".field")
                .eq(4)
                .click()
                .type("06331280");

            cy.get(".field > input")
                .eq(5)
                .click();

            cy.get(".field > input")
                .eq(6)
                .should("be.visible")
                .should("have.value", "Rua Venâncio Costa")

            cy.get(".field")
                .eq(7)
                .click()
                .type("100");

            cy.get(".button-success")
                .click();
        });
    context("03.6 - Validar Método de entrega", () =>
    {
    it('03.6.1 -  Validar entrega Moto' , () => 
        {
            cy.get(".field")
                .eq(0)
                .should("be.visible")
                .type("Regiane");

            cy.get(".field")
                .eq(1)
                .should("be.visible")
                .type(12345678900);

            cy.get(".field")
                .eq(2)
                .should("be.visible")
                .type("meuEmail@gmail.com");;

            cy.get(".field")
                .eq(3)
                .should("be.visible")
                .type("11912345678");;

            cy.get(".field")
                .eq(4)
                .should("be.visible")
                .type("18273420");;

            cy.get(".field")
                .eq(5)
                .should("be.visible")
            cy.get(".field > input")
                .eq(5)
                .click();

            cy.get(".field")
                .eq(6)
            cy.get(".field > input")
                .eq(6)
                .should("be.visible")
                .should("have.value", "Rua D")

            cy.get(".field")
                .eq(7)
                .should("be.visible")
                .type(10);

            cy.get(".field")
                .eq(8)
                .should("be.visible")
                .type("Casa");

            cy.get(".field")
                .eq(9)
            cy.get(".field > input")
                .eq(9)
                .should("be.visible")
                .should("have.value", "Jardim Primavera")

            cy.get(".field")
                .eq(10)
            cy.get(".field > input")
                .eq(10)
                .should("be.visible")
                .should("have.value", "Tatuí/SP")

            cy.get("ul > li")
                .eq(0)
                .click();

            cy.get('input[accept^="image"]').attachFile('/Img/' + 'cnh-3.jpg');

            cy.get(".button-success")
                .click();

            cy.waitUntil(() => 
                cy.get("div > .swal2-title")
                    .should("be.visible")
            );

            cy.get("div > .swal2-title")
                .should("have.text", "Aí Sim...");
        });
    });
    it('03.6.2 -  Validar entrega Bicicleta' , () => 
    {
        cy.get(".field")
            .eq(0)
            .should("be.visible")
            .type("Regiane");

        cy.get(".field")
            .eq(1)
            .should("be.visible")
            .type(12345678900);

        cy.get(".field")
            .eq(2)
            .should("be.visible")
            .type("meuEmail@gmail.com");;

        cy.get(".field")
            .eq(3)
            .should("be.visible")
            .type("11912345678");;

        cy.get(".field")
            .eq(4)
            .should("be.visible")
            .type("18273420");;

        cy.get(".field")
            .eq(5)
            .should("be.visible")
        cy.get(".field > input")
            .eq(5)
            .click();

        cy.get(".field")
            .eq(6)
        cy.get(".field > input")
            .eq(6)
            .should("be.visible")
            .should("have.value", "Rua D")

        cy.get(".field")
            .eq(7)
            .should("be.visible")
            .type(10);

        cy.get(".field")
            .eq(8)
            .should("be.visible")
            .type("Casa");

        cy.get(".field")
            .eq(9)
        cy.get(".field > input")
            .eq(9)
            .should("be.visible")
            .should("have.value", "Jardim Primavera")

        cy.get(".field")
            .eq(10)
        cy.get(".field > input")
            .eq(10)
            .should("be.visible")
            .should("have.value", "Tatuí/SP")

        cy.get("ul > li")
            .eq(1)
            .click();

        cy.get('input[accept^="image"]').attachFile('/Img/' + 'cnh-3.jpg');

        cy.get(".button-success")
            .click();

        cy.waitUntil(() => 
            cy.get("div > .swal2-title")
                .should("be.visible")
        );

        cy.get("div > .swal2-title")
            .should("have.text", "Aí Sim...");
    });
});
it.only('03.6.3 -  Validar entrega Van/Carro' , () => 
{
    cy.get(".field")
        .eq(0)
        .should("be.visible")
        .type("Regiane");

    cy.get(".field")
        .eq(1)
        .should("be.visible")
        .type(12345678900);

    cy.get(".field")
        .eq(2)
        .should("be.visible")
        .type("meuEmail@gmail.com");;

    cy.get(".field")
        .eq(3)
        .should("be.visible")
        .type("11912345678");;

    cy.get(".field")
        .eq(4)
        .should("be.visible")
        .type("18273420");;

    cy.get(".field")
        .eq(5)
        .should("be.visible")
    cy.get(".field > input")
        .eq(5)
        .click();

    cy.get(".field")
        .eq(6)
    cy.get(".field > input")
        .eq(6)
        .should("be.visible")
        .should("have.value", "Rua D")

    cy.get(".field")
        .eq(7)
        .should("be.visible")
        .type(10);

    cy.get(".field")
        .eq(8)
        .should("be.visible")
        .type("Casa");

    cy.get(".field")
        .eq(9)
    cy.get(".field > input")
        .eq(9)
        .should("be.visible")
        .should("have.value", "Jardim Primavera")

    cy.get(".field")
        .eq(10)
    cy.get(".field > input")
        .eq(10)
        .should("be.visible")
        .should("have.value", "Tatuí/SP")

    cy.get("ul > li")
        .eq(2)
        .click();

    cy.get('input[accept^="image"]').attachFile('/Img/' + 'cnh-3.jpg');

    cy.get(".button-success")
        .click();

    cy.waitUntil(() => 
        cy.get("div > .swal2-title")
            .should("be.visible")
    );

    cy.get("div > .swal2-title")
        .should("have.text", "Aí Sim...");
});
    /*


    */

    /*
        Padrão
            vazio
            1 carac
            1 a menos que o determinado ok
            nº correto de ok
            1 a mais que o ok
            caracterre incorreto de acordo com o campo - avaliar letra, numero, carac. espec
    */
});


