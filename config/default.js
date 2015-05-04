module.exports = {
    app: {
        name: 'koaStarterApp',
        version: '0.0.1'
    },
    server: {
        port: 3000
    },
    template: {
        path: 'app/views',
        options: {
            map: { ect: 'ect' }
        }
    },
    session: {
        secretKey: 'myKoajsSecretKey'
    }
};