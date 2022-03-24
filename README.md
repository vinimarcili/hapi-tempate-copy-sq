# Hapi 18 Template


## Descrição

Esse repositorio foi criado para ser um modelo de criação de APIs.

<p align="center">
  <img width="100%" src="https://www.retrocomputaria.com.br/wp-content/uploads/2014/10/Clones.jpg">
</p>

### Node version
#### v14.16.0

## Executar projeto
Instalar as dependências

`npm i`

O projeto conta com 3 arquivos `environment` que podem ser utilizados de forma simultânea para que não tenhamos mais a necessida de alterar um único arquivo .env dependendo de qual ambiente desejado utilizar. Os arquivos se encontram dentro da pasta `env` no diretório raiz do projeto.

### production.example.env
Arquivo modelo que deverá conter as informações do ambiente de produção. Após configurá-lo o nome do arquivo deve passar a ser `production.env`.
Para executar o projeto utilizando este arquivo, basta executar o seguinte comando `npm run start:prod`.

### staging.example.env
Arquivo modelo que deverá conter as informações do ambiente de staging. Após configurá-lo o nome do arquivo deve passar a ser `staging.env`.
Para executar o projeto utilizando este arquivo, basta executar o seguinte comando `npm run start:stg`.

### local.example.env
Arquivo modelo que deverá conter as informações do ambiente local ou um arquivo com variáveis misturadas. O intúito desse arquivo é que o dev faça as configurações que quiser. Após configurá-lo o nome do arquivo deve passar a ser `local.env`.
Para executar o projeto utilizando este arquivo, basta executar o seguinte comando `npm run start:local`.

`npm run start:prod` - Ambiente Produção
<br />
`npm run start:stg` - Ambiente Staging
<br />
`npm run start:local` - Ambiente Local

## Exemplo
Hoje a API possui dois módulos que devem ser seguidas meramente como exemplo nos desenvolvimentos.
> Ao utilizar esse modelo, remover os arquivos e pastas referentes a Categories e Recruitments caso não faça sentido na sua aplicação.

### Categories
#### models
Primeiramente, temos os modelos (models) definidos para esta entidade.

`models > typeorm > entities > category.ts` <br />
Nele definimos os atributos e as tipagens relacionadas a categoria (category).

#### repositories
Devemos criar um repositório de categorias que nada mais é que uma classe responsável por fazer toda a manipulação de dados da aplicação. <br />
`repositories > categories`
Dentro do repositório devemos ter uma interface (para seguirmos o conceito da Substituição de Liskov) e nele definimos o que a classe precisa ter caso implemente essa interface. <br />
Dessa forma, foi criado o arquivo `ICategoriesRepository` contendo os métodos que um repositório deve ter. <br />
Feito isso, criamos o repositório `categories.repository.ts` que terá as funções em si, no caso utilizando o banco MySQL. <br />

Além disso, é necessário criar uma pasta chama `in-Memory` e dentro dela criar um repositório utilizando armazenamento em array local (`categoriesInMemory.repository.ts`). Por padrão sempre criar com o mesmo nome do repositório "real" e adicionar o `InMemory` ao final do nome. <br />
A ideia é simular um banco de dados local para ser utilizado nos testes unitários.

#### modules
Devemos criar os `modules`. Nele será criado as operações específicas para cada módulo. <br />
No caso de categorias temos uma única operação criada que tem como objetivo listar as categorias com base no parent passado. <br />
Sendo assim, foi criado o módulo de categorias (`categories`) e dentro dele a pasta referente a listagem de categorias por parente (`findCategoriesByParents`). <br />
Por padrão, dentro da pasta `findCategoriesByParents` devemos criar os arquivos seguindo a mesma nomenclatura da pasta. <br />
Dentro dessa pasta deverá haver três arquivos, o arquivo de handler, o arquivo de serviço e o arquivo de teste do serviço.

`FindCategoriesByParents.handler.ts` <br />
O handler (em alguns projetos o pessoal denomina como controller) tem a responsabilidade de controlar a requisição e resposta sendo chamado diretamente no arquivo de rotas. <br />
`FindCategoriesByParents.service.ts` <br />
O service deverá conter todo o processo que ferá as chamadas das operações em si. <br />
`FindCategoriesByParents.service.spec.ts` <br />
O service de teste deverá conter todos os testes que achar necessário para validar o máximo de linhas possível do service real. <br />

#### routes
As rodas devem ser criadas dentro de pastas as quais ela pertencem.
No caso das categorias, todas as rotas referentes a ela focarão dentro de uma pasta chamada `categories` e dentro dela criar os arquivos de rotas com uma nomenclatura bem descritiva.
Dentro do arquivo de rotas deverá haver a chamada para seu respectivo handler e o objeto `options` com as informações que serão utilizadas na documentação do Swagger.


### Recruitments
O módulo de Recruitments deve seguir exatamente a mesma extrutura que foi descrita acima pelo módulo de Categories. <br />
A unica diferença é na criação do model que por estar utilizando o banco MongoDB o arquivo deve ser criado dentro da pasta `schemas` e não na pasta `entities`.

`models > typeorm > schemas > recruitment.ts` <br />
Nele definimos os atributos e as tipagens relacionadas ao recrutamento (recruitment).


## Documentação
Este modelo está integrado com o [Swagger](https://swagger.io/) e gerando as documentações de forma automática com base na criação das rotas.
Sempre que for criada uma rota utilizando a tipagem `IRoute` será obrigatório informas os valores ao objeto `options`.
Com as informações desse objeto, o swagger automaticamente irá criar a documentação que fica disponível em `<url do projeto>:<porta>/documentation`.

Execute o projeto localmente e acesse a rota `localhost:8081/documentation`.

Mude o nome do projeto no `package.json` para que seja mostrado no Kibana e na documentação.

> A documentação deve ser feita preferencialmente em português (pt-BR), mas outras linguas podem ser aceitas como secundárias.

## Testes
O modelo conta com o [Jest](https://jestjs.io/) instalado e configurado para a realização dos testes unitários.
Para executar os testes utilize o comando `npm run test`.

Existe um teste pronto e funcional neste projeto que valida a funcionalidade `FindCategoriesByParents`.

Todos os arquivos de teste devem conter a seguinte nomenclatura `.spec.ts`.

### Criando seus testes
Para criar um teste é recomentado que seja criado um arquivo com o mesmo nome do service que deseja validar. No exemplo criado existe o service `FindCategoriesByParents.service.ts` e criamos o arquivo de teste `FindCategoriesByParents.service.spec.ts`.
Além disso, por questão de boas práticas, devemos criar um repositório fake exclusivamente para os teste. Esse repositório deve ser criado dentro de uma pasta chamada `in-Memory` existente dentro da pasta do módulo que esteja validando. O repositório fake deve seguir o mesmo nome do repositório real seguido da palavra `InMemory`.
Por exemplo, existe o repositório `categories.repository.ts` responsável pelo serviço `FindCategoriesByParents`. Dessa forma, criamos o repositório `categoriesInMemory.repository.ts`.

`-src`
<br />
`_|--repositories`
<br />
`__|--categories`
<br />
`___|--in-Memory`
<br />
`____|--categoriesInMemory.repository.ts`
<br />
`___|--categories.repository.ts`

É necessário a criação de um repositório fake, pois nos testes unitários estavamos validando exclusivamente a funcionalidade do serviço e não possuímos conexão com banco de dados. Assim, o repositório fake deve ser desenvolvido com base em armazear os valores em um array para que seja simunado um banco de dados.

Com o repositório fake criado e as funcinalidades dentro dele implementadas, basta iniciar a criação do arquivo de tesste (`spec.ts`) seguindo o modelo já existente. O processo é bem intuitivo e qualquer dúvida que venha a surgir é recomentado consultar a documentação do [Jest](https://jestjs.io/docs/expect#expectvalue).


## Banco de dados
Este projeto está configurado para trabalhar com MySQL e MongoDB por meio do [TypeORM](https://typeorm.io/#/).
A entitie `Category` está relacionada ao banco MySQL e o schema `Recruitment` está relacionado ao banco MongoDB.
Sempre que for adicionado uma nova entidade ela deve ser criada na pasta `entities` ou `schemas`.
A pasta `entities` é referente a entidades MySQL e a pasta `schemas` é refente ao MongoDB.
Estas pastas ficam localizadas em `./src/models/typeorm/`.

O projeto também possui um CacheProvider pre configurado.
O provedor que cache que está sendo utilizado é o Redis por meio do [IORedis](https://www.npmjs.com/package/ioredis).
Seguindo as boas práticas do SOLID, foi desenvovido um provedor de cache que funciona de forme independente a qual banco estejamos utilizando. Hoje por exemplo estamos utilizando o Redis, futuramente podemos migrar para o Elasticsearch e isso não irá impactar em nada na aplicação. Uma vez que não estamos utilizando diretamente os recursos do banco e sim o nosso provider.

Power to the people
<br /><img width="132px" height="37px" src="https://squidit.com.br/wp-content/themes/squid/assets/img/logo.svg">

