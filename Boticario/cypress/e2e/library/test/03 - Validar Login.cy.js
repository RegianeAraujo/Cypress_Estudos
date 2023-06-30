/// <reference types="cypress"/>

import { doLogin } from "../function/login";

describe('03 - Renner', () => 
{
    it('Fazendo Login utilizando Espaços', () => {
        cy.visit("urldositequequeroacessar");

        var dadosTeste = 
        {
            user: " ",
            senha: " ",
        }
        doLogin(dadosTeste);
    });

    it('Fazendo Login utilizando c/ 1 caracter', () => {
        cy.visit("");

        var dadosTeste = 
        {
            user: "bruno",
            senha: " ",
        }
        doLogin(dadosTeste);
    });

    it('Fazendo Login utilizando c/ 1 caracter', () => {
        cy.visit("");

        var dadosTeste = 
        {
            cTitleMenu: " Financeiro "
        }
        doLogin(dadosTeste);
    })
})