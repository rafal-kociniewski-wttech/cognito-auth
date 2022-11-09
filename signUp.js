import amplify from "aws-amplify";
import { configure, password, username } from "./utils.js";

(async () => {
    configure();
    try {
        await amplify.Auth.signUp(username, password);
        console.log('Signing up on the way, please check your e-mail inbox.')
    } catch (error) {
        console.log('error signing in', error);
    }
})();
