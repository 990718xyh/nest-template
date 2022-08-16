## Description

[Nest-Template](https://github.com/990718xyh/nest-template.git) is Nestjs basic development template.

The following functions are integrated internally:

- Logs
- mysql Config
- Code checksum formatting

## Use

```bash
$ git clone https://github.com/990718xyh/nest-template.git
$ npm i
```

modify [Dockerfile](./Dockerfile)<br/>
modify [LICENSE](./LICENSE)

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

## Deployed in dokcer
```
$ docker build -t {your image name}:{tag} .
```


## Stay in touch

- Author - [violent xyh](https://github.com/990718xyh)

## License

Nest-Template is [MIT licensed](LICENSE).
