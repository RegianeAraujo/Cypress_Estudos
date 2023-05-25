export function acs(){
    cy.visit('https://www.google.com/')
    cy.get('img.lnXdpd')
        .should('be.visible')
    cy.get(':nth-child(1) > .gb_t')
        .contains('ail')
        .should('be.visible')
        .should('have.text', 'Gmail')      
}