const { Axios } = require('axios');

const api = new Axios({
    proxy: {
        protocol: 'https',
        host: 'polling.finance.naver.com',
        // hostname: '127.0.0.1' // Takes precedence over 'host' if both are defined
      },
});

module.exports = api;