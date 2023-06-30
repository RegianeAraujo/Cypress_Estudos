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
            senha: "1",
        }
        doLogin(dadosTeste);
    });

    it('Fazendo Login utilizando c/ 2 caracter', () => {
        cy.visit("");

        var dadosTeste = 
        {
            user: "bruno",
            senha: "12",
        }
        doLogin(dadosTeste);
    })

    it('Fazendo Login utilizando c/ 3 caracter', () => {
        cy.visit("");

        var dadosTeste = 
        {
            user: "bruno",
            senha: "123 ",
        }
        doLogin(dadosTeste);
    })
    //add linha
})