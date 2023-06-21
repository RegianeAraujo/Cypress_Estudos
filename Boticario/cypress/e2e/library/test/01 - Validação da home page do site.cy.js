import { visitando } from "../function/funcoes";

describe('01 - Validação da home page do site.', () => {
  it('01.1 - Visitando a url padrão do projeto', () => {
	cy.visit(Cypress.env("baseUrl"))
  })

  it('01.2 - Validar aceitação de cookies', () => {
	cy.visit(Cypress.env("baseUrl"))
    cy.get('#onetrust-accept-btn-handler').click()
  });

  it('01.3 - Validar acesso a home page', () => {
	cy.visit(Cypress.env("baseUrl"))
	
	cy.waitUntil(() =>
		cy.get('#onetrust-accept-btn-handler').should("be.visible"))
    
	cy.get('#onetrust-accept-btn-handler').click()
	
	cy.get('.faixa-topo-desk').should("be.visible")
  });

  it.only('01.4 - Validar visualização do menu principal', () => {
	cy.visit(Cypress.env("baseUrl"))

	cy.waitUntil(() =>
		cy.get('#onetrust-accept-btn-handler').should("be.visible"))
    
	cy.get('#onetrust-accept-btn-handler').click()
	
	cy.get("#navigation > ul > li")
		.should("have.visible").eq(0)
		cy.get("#navigation > ul > li").eq(0)
			.and("contain.html", "a")
		cy.get("#navigation > ul > li > a > span").eq(0)
			.and("have.text", " Maquiagem ")

	cy.get("#navigation > ul > li")
		.should("have.visible").eq(1)
		cy.get("#navigation > ul > li > a > span").eq(2)
		.and("have.text", " Perfumes ")

	cy.get("#navigation > ul > li")
		.should("have.visible").eq(2)
		cy.get("#navigation > ul > li > a > span").eq(4)
		.and("have.text", " Skincare ")

	cy.get("#navigation > ul > li").should("have.visible").eq(3)
	cy.get("#navigation > ul > li").should("have.visible").eq(4)
	cy.get("#navigation > ul > li").should("have.visible").eq(5)
	cy.get("#navigation > ul > li").should("have.visible").eq(6)
	cy.get("#navigation > ul > li").should("have.visible").eq(7)
	cy.get("#navigation > ul > li").should("have.visible").eq(8)
  });

  it('01.5 - Validar acesso a tela de Maquiagem', () => {
	cy.visit(Cypress.env("baseUrl"));

	cy.waitUntil(() =>
		cy.get('#onetrust-accept-btn-handler').should("be.visible"))

	cy.get('#onetrust-accept-btn-handler').click()
	
	cy.get("#navigation > ul > li").eq(0)
		.click();

	cy.waitUntil(() => 
		cy.get(".category-info-top__title > h1")
			.should("be.visible"))	

	cy.get(".category-info-top__title > h1")
			.should("be.visible")
			.and("have.text", "Maquiagem");
  });

	it("01.6 - Validar visualização do modal de cadastro", () => {
		visitando()

		cy.get("div > .footer_title")
			.scrollIntoView()
			.and("have.css", "color", "rgb(32, 32, 32)")
			.and("have.text", "CADASTRE-SE E RECEBA NOVIDADES!")

		cy.contains("CADASTRE-SE E RECEBA NOVIDADES!")
			.scrollIntoView()

	})
})
