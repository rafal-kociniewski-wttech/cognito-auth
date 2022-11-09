import amplify from "aws-amplify";

export const username = "<mail>";
export const password = "<password>";
export const configure = () => amplify.Auth.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-1_fUgV9jouX',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: 'b2sug1b9mh0k8j5unnskip279'
    }
})