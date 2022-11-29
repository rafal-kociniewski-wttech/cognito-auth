import amplify from 'aws-amplify';

export const username = '<mail>';
export const password = '<password>';
export const configure = () =>
  amplify.Auth.configure({
    Auth: {
      region: '<aws_region>',
      userPoolId: '<aws_user_pool_id>',
      userPoolWebClientId: '<aws_user_pool_client_id>',
    },
  });
