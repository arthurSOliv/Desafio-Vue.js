# mediapp

Funcionalidades:

Cadastro de usuário
- [x] Cadastro de cliente
- [ ] Cadastro de produtos
Visão de Administrador:
- [x] Incluir, excluir, atualizar e visualizar medicamentos. (Atento as válidações)
- [ ] Vendas Totais (Valor total, Ticket médio e unidades vendidas => colocar um card ou algo do tipo para cada)
- [ ] Gráfico com vendas ao logo dos dias
- [ ] Vendas por vendedor (Valor total, Ticket médio e unidades vendidas)
Visão de Vendedor:
- [x] Visualizar Medicamentos;
- [x] Incluir e Cancelar vendas de Medicamentos. (Uma venda tem medicamentos, quantidades, um vendedor responsável e o valor)

## Project setup
Primeiro passo, rodar o comando na pasta raíz do projeto, para instalar todas as dependências.
```
yarn install
```

### Compiles and hot-reloads for development
Com todas as dependências instaladas, basta o rodar o comando a baixo para iniciar a aplicação.
```
yarn serve
```

### Pages
1. Login
  - Página de Login:
      Para logar como administrador usar as credenciais:
          * admin@email.com
          * admin000
          
      Para logar como vendedor usar as credenciais:
          * vendedor@email.com
          * vendedor000
  
1. Visão do administrador
  - Página inicial apenas com a navbar
  - Clicando em medicamentos tem-se a página com a listagem de medicamentos, onde se pode adicionar, editar e deletar medicamentos
  - Clicando em vendas tem-se a página com a listagem das vendas realizadas
  
  1. Visão do vendedor
  - Página inicial apenas com a navbar
  - Clicando em medicamentos tem-se a página com a listagem de medicamentos
  - Clicando em vendas tem-se a página com a listagem das vendas realizadas, onde se pode realizar uma nova venda ou cancelar uma venda existente
