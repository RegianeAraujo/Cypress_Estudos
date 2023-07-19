/// <reference types="cypress"/>

import { criarConta } from "../function/screenGmail";

describe('03 - Criacao de conta', () => 
{
    it.only('03. 1 - Validar acesso ao modal de criação de conta', () => {
        criarConta();
    })
})