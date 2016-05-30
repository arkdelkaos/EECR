# EECR  
[![codecov](https://codecov.io/gh/arkdelkaos/EECR/branch/master/graph/badge.svg)](https://codecov.io/gh/arkdelkaos/EECR)

Home/App para el clan **Elite España** de **Clash Royale**  
Contendrá un **sistema de ranking de barajas**, que detallaré en el futuro.  

## TO-DO
- [ ] Home  
  - [ ] Chat Stream  
  - [x] Admim System  
    - [x] Deck Admin Editor
  - [x] VIP System  
- [x] Login/Signup w/Perfil  
- [x] Deck Editor  
- [ ] Deck Ranking  
  - [ ] Top10 & MostUsed10  
  - [ ] +1 vote  
  - [ ] Full List, shortable  
  - [ ] Comments on
- [ ] Tournament System  
  - [ ] Editor
  - [ ] Top  
  - [ ] Achievements
- [x] Tweeter Stream  
- [ ] Retweet Bot  
- [ ] Multilanguage  

[![Feature Requests](http://feathub.com/arkdelkaos/EECR?format=svg)](http://feathub.com/arkdelkaos/EECR)

____
#TLDR Tech  
- JS:Babel
- Markup:HTML  
- Style:Sass+UIBootstrap  
- Router:ngRouter  
- BBDD:Mongoose  
- Auth:Passport  
- socket.io  
- Test:Jasmine  
____

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.3.0-beta.0.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
