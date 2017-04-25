# CRIANDO A APLICAÇÃO

## Pré-Requisitos

* NodeJS v5.11+

## Criando a Aplicação

* npm install -g create-react-app
* create-react-app eventos-react

## Estrutura

```
|- public (local dos arquivos públicos do projetos, html estáticos, imagens)
|- src (local para o código-fonte da aplicação)
|  |- app (componentes padrão da aplicação como App e Rotas) 
|  |- components (componentes genéricos não relacionados a uma funcionalidade específica)
|  |- story 1..n (módulos da aplicação, funcionalidades)
|- test (local para as definições dos testes unitários)
   |- app (testes para os componentes padrão da aplicação)
   |- components (testes para os componentes genéricos não relacionados a uma funcionalidade específica)
   |- story 1..n (testes de funcionalidades)
```