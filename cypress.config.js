const {defineConfig} = require('cypress')

module.exports = defineConfig({
    e2e :{
        baseUrl: 'https://petstore.swagger.io/v2',
        specPattern: 'support/cypress/e2e',
        supportFile: false
    },

    env : {
        username : 'gurita',
        password : '123gurita'
    }
})