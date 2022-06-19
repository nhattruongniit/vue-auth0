import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
  clientID: process.env.VUE_APP_AUTHO_CLIENTID,
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  redirectUri: process.env.VUE_APP_CALLBACK_URL,
  responseType: 'token id_token',
  scope: 'openid profile'
});

let token = {};

const handleAuth = cb => {
  webAuth.parseHash(( error, authResult ) => {
    if(authResult && authResult.accessToken && authResult.idToken) {
      token.accessToken = authResult.accessToken;
      token.idToken = authResult.idToken;
      token.expiry = new Date().getTime() + authResult.expiresIn * 1000
      cb();
    } else {
      console.log(error)
    }
  })
}

const isLogged = () => {
  return token.accessToken && new Date().getTime() < token.expiry
}

const logOut = () => {
  token = {}
}

const login = () => {
  webAuth.authorize();
}

export { login, handleAuth, isLogged, logOut }

