# NestJS + PostgreSQL + TypeORM

## Udemy: https://www.udemy.com/course/nestjs-zero-to-hero/

## Installation

```bash
$ npm install or yarn
```

## Required
- Docker
```bash
$ docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=root -e POSTGRES_USER=root -e POSTGRES_DB=pgdb -v /custom/mount:/var/lib/postgresql/data -d postgres
```

## Running the app

- Rename .env.example to .env and fill in the values

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
