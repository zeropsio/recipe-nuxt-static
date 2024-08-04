# Zerops x Nuxt - Nodejs

![Header Image](https://storage-prg1.zerops.io/4gn35-objectstorage0/nuxtjs-zerops)

A Node.js Nuxt app deployment example for [Zerops](https://zerops.io) - a developer first cloud platform.

## Deploy to Zerops

1. [Create an account](https://app.zerops.io/registration) and locate the "Import project" button in the top left menu.

2. Copy & paste the YAML setup below and confirm

```yaml
project:
  name: zerops-nuxt

services:
  - hostname: nuxtnodejs
    type: nodejs@20
    buildFromGit: https://github.com/fxck/recipe-nuxt-nodejs
    ports:
      - port: 3000
        httpSupport: true
    enableSubdomainAccess: true
    minContainers: 1
```

Join [Zerops Discord community](https://discord.com/invite/WDvCZ54).