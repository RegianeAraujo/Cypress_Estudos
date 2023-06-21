/// <reference types="cypress" /> 

import { acessoModal, visitaUrl } from "../library/function/funcaoVisita";
import { formValid, formValid_02 } from "../library/function/funcaoForm";

describe('Testes automatizando no site Dev.Finance', () => {
  
  it('01 - Visitando o site padrão e validando o acesso pelo título(logotipo)', () => {
    cy.visit("https://dev-finance.netlify.app/")
    cy.get("header > img").should("be.visible")
    //NÃO SERÁ POSSÍVEL VALIDAR O TEXTO, PQ O LOGOTIPO É UMA IMAGEM.
    //POR ESTE MOTIVO O CÓDIGO ABAIXO SERÁ COMENTADO E DESCARTADO
    //cy.get("").should("have.text", "...")
  });

  it.only('02 - Validando critério de aceite', () => {
    cy.visit("https://dev-finance.netlify.app/")
    
    cy.get("header > img")
    	.should("be.visible");
    
	cy.get(".card ").eq(0)
    	.should("have.css", "background-color", "rgb(255, 255, 255)");

    cy.get(".card > h3 > span").eq(0)
		.should("have.text", "Entradas")
		.contains("Entr")
		//.and("have.css", "background-color", "rgb(255,255,255)");

	cy.get(".card > h3 > span").eq(1)
		.should("have.text", "Saídas");
    
	cy.get(".card.total")
    	.should("have.css", "background-color", "rgb(6, 156, 86)"); 
		cy.get(".card > h3 > span").eq(2)
			.should("have.text", "Total")
			cy.get(".card > h3").eq(2)
				.and("contain.html", "img")
				cy.get(".card > p").eq(2)
					.should("contain.text", "R$")

	
    cy.get("#transaction > a").should("be.visible").and('have.text', '+ Nova Transação')
      .and("have.css", "color", "rgb(6, 156, 86)")

    cy.get("#data-table > thead > tr > th").eq(0)
	.should("be.visible")
	.and('have.text', 'Descrição')
    
	cy.get("#data-table > thead > tr > th").eq(1)
	.should("be.visible")
	.and('have.text', 'Valor')
    
	cy.get("#data-table > thead > tr > th").eq(2)
	.should("be.visible").and('have.text', 'Data')
    
	cy.get("#data-table > thead > tr > th").eq(3)
	.should("be.visible")
    
	cy.get("footer > p")
	.should("be.visible")
	.and("have.text", "dev.finance$")
  })

  it("03 - Validando acesso ao modal de transações", () => {
    //PRIMEIRO EXEMPLO DE FUNÇÃO. PARA UTILIZAR FUNÇÕES, COLOCO EM OUTRO ARQUIVO E IMPORTE PARA ESTE
    // ou seja, REALIZO A FUNÇÃO COM CAPACIDADE DE EXPORTAÇÃO PARA IMPORTAÇÃO
    visitaUrl()
    cy.get('#transaction > a').click()
    cy.get('#form').should('have.visible')
    cy.get('#form > h2').should('have.text', 'Nova Transação')
  })

  it('04 - Validar botão do formulário "cancelar"', () => {
    visitaUrl()
    acessoModal()
    cy.get('#description').type('Parcela do carro')
    cy.get('#amount').type('687,59')
    cy.get('#date').click().type('1910-09-01')
    cy.get('.input-group.actions > a').click()
    cy.get("footer > p").should("be.visible")
    cy.get("tbody").should("not.be.visible")
    cy.get("tbody > tr").should("be.not.exist")
  });

  it('05 - Validar botão do formulário "salvar"', () => {
    visitaUrl()
    acessoModal()
    cy.get('#description').type('Parcela do carro')
    cy.get('#amount').type('687.59')
    cy.get('#date').click().type('1910-09-01')
    cy.get('.input-group.actions > button').click()
    cy.get("footer > p").should("be.visible")
    cy.get("tbody").should("be.visible")
    cy.get("tbody > tr").should("be.exist")
  });

  
  it('06 - Validar botão remover transação', () => {
    visitaUrl()
    formValid()
    cy.get("tbody > tr").eq(0).should("have.length", 1)
    cy.get("tbody > tr").eq(1).should("have.length", 0)
  });

  it('07 - Validar visualização dos displays', () => {
    visitaUrl()
    formValid_02()
    cy.get("#incomeDisplay").should('contain', '2.500,00')
    cy.get("#expenseDisplay").should('contain', '750,00')
  });


	it('08 - ', () => {
		visitaUrl()
		cy.get("tbody > tr > td")
			.should("not.exist")
	})

});

