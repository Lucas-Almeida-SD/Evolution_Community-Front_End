# Evolution Community - Front End

[Link](https://evolution-community.web.app/) para acessar a página do projeto.

[Link](https://github.com/Lucas-Almeida-SD/Evolution_Community-Back_End) para acessar o repositório da parte `back-end` do projeto.

O projeto consiste em uma aplicação `fullstack` para simular cadastros de usuários em comunidades específicas, com o objetivo de receber informações sobre assuntos relacionados às respectivas comunidades, além de concorrerem a prêmios incríveis.

A parte `front-end` permite ao usuário realizar o seu cadastro através de um __formulário multi step__, possuindo três etapas, sendo:
    
  1. Informações pessoais;
    
  2. Informações de endereço;

  3. Seleção da comunidade.

Após finalizar o cadastro, os dados do usuário são enviados para a `API`, no qual se encontra na parte `back-end` desta aplicação, para que ela armazene as informações do usuário no banco de dados. Após esta operação, o usuário pode realizar seu login na aplicação e visualizar os seus dados, podendo atualizá-los a qualquer momento, preenchendo um formulário igual ao do momento de cadastro, ou se desejar, pode deletá-lo.

Para esta parte do projeto, foi utilizado a prática de `mobile first` durante o desenvolvimento.

## Tecnologias

- [React.js](https://pt-br.reactjs.org/)

- [TypeScript](https://www.typescriptlang.org/)

- [Docker](https://www.docker.com/)

- [React Hot Toast](https://react-hot-toast.com/)

- [ESlint](https://eslint.org/)

- [Sass](https://sass-lang.com/)

- [date-fns](https://date-fns.org/)

## Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone git@github.com:Lucas-Almeida-SD/Evolution_Community-Front_End.git
$ cd Evolution_Community-Front_End
```

Para iniciá-lo, siga os passos abaixo:

<details>
  <summary><strong>Com Docker</strong></summary>

  ```bash
  # Criar imagem
  $ docker image build -t evolution-community-frontend ./

  # Criar container
  $ docker container run -dit --name evolution-community-frontend -p 3000:3000 evolution-community-frontend
  ```
</details>

<details>
  <summary><strong>Sem Docker</strong></summary>

  ```bash
  # Instalar as dependências
  $ npm install

  # Iniciar o projeto
  $ npm start
  ```
</details>

O app estará disponível no seu browser pelo endereço http://localhost:3000.

Lembrando que será necessário inserir os endpoints da sua API no arquivo `.env.local.example` e renomear este arquivo para `.env.local` para que a aplicação funcione corretamente.
