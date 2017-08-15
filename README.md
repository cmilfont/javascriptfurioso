
Esse projeto foi criado com [Create React App](https://github.com/facebookincubator/create-react-app).

Usando o [nvm](https://github.com/creationix/nvm) para gerenciar as versões do [Nodejs](https://nodejs.org/en/)

Para executar os testes que avaliam o código demonstrado nos vídeos, instale primeiro o nvm como indicado no site.

Em sequida instale o node que utilizo:

```sh
nvm install v8.2.1
```

Instale o yarn de forma global:

```sh
npm install -g yarn
```

Na raiz do projeto execute o install das dependências:

```sh
yarn install
```

Execute o código executando a **task** com o parâmetro de watch para indicar que ele deve ficar observando e atualizando conforme as mudanças.

```js
yarn test -- --watch
```
