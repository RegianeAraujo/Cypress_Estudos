    //PRIMEIRO EXEMPLO DE FUNÇÃO. PARA UTILIZAR FUNÇÕES, COLOCO EM OUTRO ARQUIVO E IMPORTE PARA ESTE
    // ou seja, REALIZO A FUNÇÃO COM CAPACIDADE DE EXPORTAÇÃO PARA IMPORTAÇÃO

export function visitaUrl() {
    cy.visit("https://dev-finance.netlify.app/")
    cy.get("header > img").should("be.visible")    
}

export function acessoModal() {
    cy.get('#transaction > a').click()
    cy.get('#form').should('have.visible')    
}