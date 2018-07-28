module.exports = {
  mode: 'spa',
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/callback',
      home: '/home',
    },
    strategies: {
      github: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        scope: ['read:user'],
      },
      foursquare: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://foursquare.com/oauth2/authenticate',
        userinfo_endpoint: false,
        response_type: 'token',
        scope: [],
        redirect_uri: 'http://localhost:3000/login',
        client_id: process.env.FOURSQUARE_CLIENT_ID,
        client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
      },
    },
  },
};
