const Logger = require('./singleton')

Logger.setConfig({
    appName: 'Lucas Travagin'
})

Logger.log('App has been initialized', ['Teste', 'Teste 2'])