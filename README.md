# improved-moodle

Extensão para navegador criada para melhorar a experiência do usuário na plataforma Moodle

## Instalação

Em breve.

## Funcionalidades

- Listagem e Busca dos Cursos.

  - Fixar Cursos

  - Ordenar por Nome e Último Acesso

- Credenciais

  - Preenchimento Automático do formulário de Login

- Chats

  - Listar e Buscar por Chats

  - Enviar e Receber mensagens

- Serviços em Segundo Plano

  - Notificação quando houver novas mensagens nos chats

## Aviso

- A utilização da extensão é de inteira e total responsabilidade do utilizador.

- Eu não me responsabilizo pelas consequências da utilização dos serviços e/ou da extensão.

## Hackeando

- Para baixar o código do projeto, digite:

```sh
git clone https://github.com/guesant/improved-moodle.git
cd improved-moodle
```

- Instalação das dependências:

```sh
# Com yarn (recomendado)
yarn

# Com npm
npm install
```

- Scripts de desenvolvimento

```sh
# geram assets e scripts em modo reload
# o conteúdo fica no diretório dist/ext
yarn dev

# formata os arquivos
yarn format

# analisa o código (checa os erros de typescript e eslint)
yarn lint

# os testes são feitos com o jest
yarn test
```

- Scripts de produção

```sh
# é gerado a pasta dist/ext e o zip da extensão
yarn build
```

### Estrutura do Projeto

- `src/assets/manifest.json`

  > A alma da extensão.

  Links úteis:

  - https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json

- `src/services`

  > Conteúdo relacionado a um serviço, estruturado.

- `src/helpers`

  > Utilitários.

  > Geralmente, cada utilitário possuí testes.

- `src/BackgroundScript`

  > Script que estará executando em segundo plano.

- `src/BrowserAction`

  > Página do popup que é aberto quando for clicado no ícone da extensão.

- `src/ContentScript`

  > Script que será executado em cada página (desde que esteja autorizado pelo manifest.json) que for aberta.

## Licença

[Gabriel R. Antunes](https://github.com/guesant) e [Contribuidores](https://github.com/guesant/improved-moodle/graphs/contributors) © [MIT](./LICENSE)
