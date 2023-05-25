import {acs} from "../funcoes/acsf"

describe('validar visualização do google.com', () => {
  it('Validar acesso a url principal', () => {
    //todo os comandos abaixo da linha 6 a 12, foram transformandos em uma função
      //esta função é um arquivo externo de nome acsf.js
    cy.visit('https://www.google.com/')
    cy.get('img.lnXdpd')
        .should('be.visible')
    cy.get(':nth-child(1) > .gb_t')
        .contains('ail')
        .should('be.visible')
        .should('have.text', 'Gmail')
  })

  it('Validar acesso a tela do gmail', () => {
    //posso ter uma função, agrupando código e apenas chamá-la após importar
      //importo no início do código, linha 1
    acs()
    //acima a função que eu fiz dos código do primeiro caso de teste
    cy.get('#APjFqb').type('Corinthians')
    cy.get('.FPdoLc > center > .gNO89b').get('#ERWdKc > .wM6W7d > span').click()
  });





})