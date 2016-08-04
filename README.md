# EECR  
[![codecov](https://codecov.io/gh/arkdelkaos/EECR/branch/master/graph/badge.svg)](https://codecov.io/gh/arkdelkaos/EECR)

Home/App para el clan **Elite España** de **Clash Royale**  
Contendrá un **sistema de ranking de barajas**, que detallaré en el futuro.  

## TO-DO
- [x] Home Design
- [ ] Clan Module
- [ ] Deck Module
- [ ] Tournaments Module
- [ ] Forum Module
- [x] RRSS Module
- [ ] i18n

[![Feature Requests](http://feathub.com/arkdelkaos/EECR?format=svg)](http://feathub.com/arkdelkaos/EECR)

____
#TLDR Tech  
- JS:Babel+Polyfill
- Gulp+Webpack
- Markup:Jade  
- Style:Sass+UIBootstrap  
- Router:uiRouter  
- BBDD:Mongoose  
- Auth:Passport  
- socket.io  
- Test:Mocha+Chai+Sinon  
____

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.4.6, npm ^2.15.5
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

## Yeoman
This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.0.0-rc.0.
