module.exports = {
  server: {
    port: 8000
  },
  security: {
    salt: ""
  },
  aws: {
    bucket: '',
    accessKeyId: '',
    secretAccessKey: '',
    region: ''
  },
  uploadFileMaxSize: 20000000,
  email: {
    from: '',
    server: '',
    port: 587,
    user: '',
    pass: ''
  },
  googleMap: '',
  plaid: {
    clientId: '',
    secret: '',
    publicKey: '',
    product: ['auth'],
    countryCodes: 'US,CA,GB,FR,ES,IE',
    env: 'sandbox'
  },
  stripe: {
    publishableKey: '',
    secretKey: ''
  }
};
