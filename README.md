# e-juno-ui

Base de componentes

## Rodando o projeto

- Tenha instalado o `NodeJS` versão `v8.14.1` ou superior.
- Execute o comando `npm install` para instalar as dependências do projeto.
- Execute o comando `npm run storybook` para abrir a documentação dos componentes.

## Ambiente de desenvolvimento

Para trabalho remoto com a biblioteca de UI e algum outro projeto que a consuma o ideal é criar um link local.

- Execute `npm run dev` para criar um watch das mudanças de trabalho.
- Execute `npm link` para expor o projeto local.
- No projeto que irá consumir a biblioteca de componentes execute `npm link e-juno-ui`.

Pronto agora todas as mudanças de desenvolvimento feitas no e-juno-ui irão refletir automaticamente no projeto local que estiver consumindo essa dependência.

## Ambiente de produção

Para gerar um build de produção é preciso executar o seguinte comando:

- `npm run build` esse comando irá criar um diretório chamado `./dist` onde será adicionado os arquivos `index.js` e `index.js.map` esses são os arquivos expostos da dependência `e-juno-ui`.

**Obs**: caso sejá feito deploy no `NPM` de forma privada, o diretório `./dist` poderá ser iguinorado pelo `.git`, enquanto o deploy for feito direto no github o diretório `./dist` não pode constar no `.gitignore`.

### Tecnologias utilizadas

- webpack
- es6
- babel
- storybook
- react
- react-dom
- styled-components
- fontawesome
- color
- react-dropzone
- react-tabs
- styled-bootstrap-grid

#### Estrutura do projeto

- Arquivo `./webpack.config.js` contem as configurações essenciais para o funcionamento do projeto.
- Arquivo `./package.json` contem as dependências e os comando para rodar o projeto.
- Arquivo `./.babelrc` contem as configurações para o transpile do ES6.
- Diretório `.storybook` contem as configurações para exibir o preview dos componentes.
- Diretório `./src` contem o código base do projeto.
- Diretório `./src/utils` contem arquivos auxiliares ao projeto.
- Diretório `./src/designSystem` contem todas as configurações do design da aplicação.
- Diretório `./src/components` contem todas os componentes da aplicação, estrutura baseada no conceito `ATOMIC Design`.
- Arquivo `./src/components` arquivo principal para expor os componentes públicos.

##### To-Do

- [ ] Modal
- [ ] Tooltip
- [ ] Mensagem de erro nos input
