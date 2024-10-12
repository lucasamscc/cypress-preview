# Aplicação Ímpar/Par com Teste em Cypress
Este é um projeto simples em JavaScript para verificar se um número é ímpar ou par, acompanhado de testes automatizados utilizando o Cypress.

## Pré-requisitos
Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (inclui o npm)
- [Git](https://git-scm.com/)

## Como clonar o repositório
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
2. Instale as dependências do projeto:
   ```bash
   npm install
3. Estrutura do Projeto
- `isEvenOrOdd.js`: Contém a lógica para verificar se um número é ímpar ou par.
- `cypress/`: Pasta que contém os testes automatizados usando Cypress.
- `cypress/e2e/isEvenOrOdd.spec.js`: O teste que verifica o funcionamento da aplicação.
  
5. Executar os testes com Cypress
- Para rodar os testes automatizados, primeiro instale o Cypress:
    ```bash
    npm install cypress --save-dev

6. Abra o Cypress:
    ```bash
    npx cypress open

7. No ambiente gráfico do Cypress, clique em E2E Testing e procure pelo arquivo `isEvenOrOdd.spec.js`.
  
9. Ou, para rodar os testes diretamente no terminal (modo headless):
   ```bash
    npx cypress run

Considerações Finais

Este projeto foi desenvolvido para fins educativos, demonstrando como integrar uma lógica simples em JavaScript com testes automatizados usando Cypress. Sinta-se à vontade para adaptar o código ou adicionar novos testes!
