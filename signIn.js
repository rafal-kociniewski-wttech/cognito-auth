import amplify from "aws-amplify";
import clipboardy from 'clipboardy';
import { configure, password, username } from "./utils.js";

(async () => {
    configure();
    try {
        await amplify.Auth.signIn(username, password);
        amplify.Auth.currentSession().then(res => {
            clipboardy.writeSync(`Bearer ${res.getIdToken().getJwtToken()}`);
            console.log('Bearer token copied to clipboard!')
        })
    } catch (error) {
        console.log('error signing in', error);
    }
})();
