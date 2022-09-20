 
# \<NLW/> eSports | Rocketseat
![imagem-nlw-esports](https://user-images.githubusercontent.com/4954302/191106024-9c384d95-1139-4a88-9b94-f7abf41f6cdc.png)

# NLW eSports - ignite
  - [1. Objetivo](#1-objetivo)
  - [2. Descrição](#2-descrição)
  - [3. Projetos](#3-projetos)
    - [3.1 Aplicação back-end (API)](#31-aplicação-back-end)
    - [3.2 Aplicação front-end (mobile)](#32-aplicação-front-end-mobile)
    - [3.3 Aplicação front-end (web)](#33-aplicação-front-end-web)
  - [4. Leiaute](#4-leiaute)
    - [4.1 Interface mobile](#41-interface-mobile)
    - [4.2 Interface web](#42-interface-web)  
  - [5. Pré-requisitos](#5-pré-requisitos)
    - [5.1 Node.js](#51-nodejs)
    - [5.2 npm](#52-npm)
  - [6. Instalação](#6-instalação)
    - [6.1 Clonar o repositório](#61-clonar-o-repositório)
    - [6.2 Acessar o diretório do projeto](#62-acessar-o-diretório-do-projeto)
    - [6.3 Instalar as dependências](#63-instalar-as-dependências)
  - [7. Execução](#7-execução)
  - [8. Licença](#8-licença)
  
## 1. Objetivo
 Registrar as atividades de estudo desenvolvidas durante o evento **\<NLW/> eSportes - 2022.**

## 2. Descrição
O NLW (*Next Level Week*) é uma ação de marketing da [Rocketseat](https://www.rocketseat.com.br/) focada em programação. A abordagem é de apresentar conteúdos práticos e desenvolver uma aplicação completa em uma semana. O evento e composto de duas trilhas de aprendizagem: **explorer**, para usuários iniciantes e **ignite** para usuários mais experientes. Este projeto acompanha o desenvolvimento da trilha ignite.

## 3. Projetos

* ### 3.1 Aplicação back-end
Desenvolvimento de uma API utilizando [Node.js](https://nodejs.org/) e [SQLite](https://www.sqlite.org/) que retorna um JSON com as informações dos games para uso pelas aplicações front-end.

* ###  3.2 Aplicação front-end mobile
Desenvolvimento de aplicação para celular utilizando [React Native](https://reactnative.dev/) acessando a API do back-end e apresentando os dados no celular.

* ### 3.3 Aplicação front-end web
Desenvolvimento de aplicação para web utilizando [React](https://reactjs.org/) acessando a API do back-end e apresentando os dados no browser.

## 4. Leiaute
O leiaute do projeto pode ser visualizado no link [design do projeto](https://www.figma.com/file/MHLGpGZ8Dq4KTU4o1GIV5M/NLW-eSports-(Community)?node-id=0%3A1). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

* ### 4.1 Interface mobile
![image](https://user-images.githubusercontent.com/4954302/191153751-cb792f7d-b675-4baf-980d-a22bf6b8a07b.png)

* ### 4.2 Interface web
![image](https://user-images.githubusercontent.com/4954302/191153791-01e767d6-2a83-446b-abb8-60a20d339f29.png)

## 5. Pré-requisitos

### 5.1 Node.js
> Faça o download e instalação do [Node.js](https://nodejs.org/)
### 5.2 npm
> npm (Node Package Manager)
   ```sh
   npm install npm@latest -g
   ```   
   
## 6. Instalação
### 6.1 Clonar o repositório
   ```sh
   git clone git@github.com:prpires66/nlw-eSports.git
   ```
### 6.2 Acessar o diretório do projeto   
   ```sh
   cd nlw-eSports.git
   ```
### 6.3 Instalar as dependências  
   > Dependências da aplicação server
   ```sh
   cd server && npm install
   ```
   > Dependências da aplicação web
   ```sh
   cd web && npm install
   ```
   > Dependências da aplicação mobile
   ```sh
   cd mobile && npm install
   ```
## 7. Execução
>Serão necessários 02 terminais simultâneos para execucão. Um para o back-end (server) e outrao para o front-end (mobile/web) 
   > Aplicação server
   ```sh
   npm run dev
   ```
   > Aplicação mobile
   ```sh
   npx expo start
   ```
   > Aplicação web
   ```sh
   npm run dev
   ```

## 8. Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.
