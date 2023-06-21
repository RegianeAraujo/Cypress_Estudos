/*
0 - Anotações - Lmebretes:

    01.js e 01.cy.js - Revisados
    02.js falta validar ícone que gira de processando e amarelo e 02.cy.js adicionar novos casos

1. Divisões e Etapas do Projeto:

    1ª Etapa:
        Testes visibilidade / visuais:
        * validação de acesso a tela;
        * validação de critérios de aceite;
        * validação visual
            ** css.
            ** palavras / português.
            ** alertas.

    2ª Etapa:
        Teste funcional de cada opção de evento, ou seja, teste de ação de cada elemento apresentado, podendo ser um botão ou um campo.

2. Regras para os testes visuais:

    AS validações realizadas deverão respeitar a ordem de como o código é apresentado, ou seja a estrutura desenvolvida.

    As validações que deverão ser realizadas em Elementos são:
        Sem evento:
            Ex: Campos apenas visuais
        Com evento:
            Ex: Campos de entrada, saída, botões.

    Os campos a seguir deverão possuir as seguintes validações:
        Alertas:
                Visível
                Tag html ou classe
                Atributo
                Css
                Texto
                Tempo de apresentação
                Não visível
        Botões:
                Visível
                Habilitado ou não
                Tag html ou classe
                Atributo
                Css
                Texto
                Texto css
        Campos datas:
                Visível
                Tag html ou classe
                Atributo formcontrolname "begindate" ou "enddate"
                ***Atributo placeholder "00/00/0000"
                ***Atributo tipo
                Texto
        Campo matriz:
                Visível
                Tag html ou classe
                Atributo formcontrolname "fiscalNumber"
                Atributo placeholder "00.000.00/0000-00"
                Atributo tipo
                Texto
        Ícones:
                Visível
                Atributo role="img"
                css
                Texto
        Textos:
                Visível
                Css
                Texto

3. Regras para os testes funcionais:
*/