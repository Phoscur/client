# UGamela revived

Web technology has evolved a lot since the old PHP times. It's been over ten years, when I already knew that it had to be completely redone from the core.

In my spare time (@phoscur) this project solely advances with help of the old and [new community in Discord](https://discord.gg/myrGhy), @mamen redevelops the [serverside API](https://github.com/ugml/api).


## Want to have a look at what we have here?

First we have to download **a few** npm packages (gosh Vuetify has too many dependencies).

```
npm install
```

The mockup server allows for development independently from the API, just fake what you expect to work on the user interface!
```
npm run mock-server
```
And run this, it's on port 8080 (env PORT) by default

## Compiles and hot-reloads for development
```
npm run serve
```

## TDD with Cypress
Cypress can be very useful to debug for example frame by frame, and I highly recommend you to look into creating or at least outlining an e2e test first, before you implement a new feature. To open Cypress:
```
npm run cy
```

# Other useful commands (Vue CLI):

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
