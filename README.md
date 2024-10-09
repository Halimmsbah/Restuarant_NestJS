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


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Project Structure
```
  c:/Users/Halim/Desktop/study/projects/Restaurent Api/
  ├─]dist/ (ignored)
  ├─]node_modules/ (ignored)
  ├─ src/
  │  ├─ auth/
  │  │  ├─ decorators/
  │  │  │  ├─ current_user.decorators.ts
  │  │  │  └─ roles.decorators.ts
  │  │  ├─ dto/
  │  │  │  ├─ signin.dto.ts
  │  │  │  ├─ signup.dto.ts
  │  │  │  └─ updateUser.dto.ts
  │  │  ├─ guards/
  │  │  │  └─ roles.guard.ts
  │  │  ├─ schemas/
  │  │  │  └─ user.schema.ts
  │  │  ├─ auth.controller.ts
  │  │  ├─ auth.guard.ts
  │  │  ├─ auth.module.ts
  │  │  ├─ auth.service.ts
  │  │  └─ jwt.strategy.ts
  │  ├─ cloudinary/
  │  │  ├─ cloudinary.module.ts
  │  │  ├─ cloudinary.response.ts
  │  │  ├─ cloudinary.service.ts
  │  │  └─ cloudinary.ts
  │  ├─ images/
  │  │  ├─ images.controller.ts
  │  │  ├─ images.module.ts
  │  │  └─ images.service.ts
  │  ├─ meal/
  │  │  ├─ dto/
  │  │  │  └─ create-meal.dto.ts
  │  │  ├─ schemas/
  │  │  │  └─ meal.schema.ts
  │  │  ├─ meal.controller.ts
  │  │  ├─ meal.module.ts
  │  │  └─ meal.service.ts
  │  ├─ restaurents/
  │  │  ├─ dto/
  │  │  │  ├─ createRest.dto.ts
  │  │  │  └─ updateRest.dto copy.ts
  │  │  ├─ schemas/
  │  │  │  └─ restaurent.schema.ts
  │  │  ├─ restaurents.controller.ts
  │  │  ├─ restaurents.module.ts
  │  │  └─ restaurents.service.ts
  │  ├─ uploads/
  │  ├─ utils/
  │  │  └─ apiFeatures.utils.ts
  │  ├─ app.controller.ts
  │  ├─ app.module.ts
  │  ├─ app.service.ts
  │  └─ main.ts
  ├─ .env.development
  ├─ .eslintrc.js
  ├─ .gitignore
  ├─ .prettierrc
  ├─ nest-cli.json
  ├─ package-lock.json
  ├─ package.json
  ├─ README.md
  ├─ tsconfig.build.json
  └─ tsconfig.json


```
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
