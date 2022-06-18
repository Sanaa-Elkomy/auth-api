<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Installation

```bash
$ git clone https://github.com/Sanaa-Elkomy/auth-api.git
$ cd auth-api
$ npm install
```

### You need create an .env file like below

```bash
DEV_PORT=3000
DEV_HOST=http://localhost:3000
DEV_MONGO_URI=Your_Mongo_Uri_ReplicaSet
JWT_SECRET=Your_Secret
JWT_EXPIRES_IN=60d
```

## Pre-Run Dependencies

```bash
# You need a MongoDB replica set, and starting a replica set locally for development is a required step, either provide an existing replica connection string or use a small utility script to run a mongo replica set and use the output connection string instead

$ npm run mongo_replicaset
```

## Running the app

```bash
# development watch mode
$ npm run start:dev

# debug mode
$ npm run start:debug

# production mode
$ npm run start:prod
```

## Test

```bash
# sample unit tests for user controller
$ npm run test:e2e

```

## Documentation

>Documentation is automatically generated using [@compodoc/compodoc](https://compodoc.app/),
Check out current project documentation on [/auth-api](https://sanaa-elkomy.github.io/auth-api/).

>A Swagger documentation is also automatically generated and can be accessed by running the project and heading to `/api`
and possibly the openapi specification json file that can be imported in rest clients (eg,. `insomnia`, `postman`) by heading to `/api-json`

## Enhancements

- Integrating with Helmet Package
- Integrating with CSRF Protection Package
- Integrating with Rate Limiting Package
- Adding Logger
- Adding Full Test Cases
- Adding missing Endpoints (find, update)

## Author

- [@Sanaa-Elkomy](https://github.com/Sanaa-Elkomy)
