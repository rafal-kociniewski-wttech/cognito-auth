import amplify from 'aws-amplify';

export const username = 'rafal.kociniewski@wundermanthompson.com';
export const password = 'Passw0rd!';
export const configure = () =>
  amplify.Auth.configure({
    Auth: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_Yh64PeF7J',
      userPoolWebClientId: 'q061hdsb9ln2nu0qa34o41e9b',
    },
  });
